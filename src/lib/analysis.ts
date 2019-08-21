import consola from 'consola';
import { TransformJson } from '../../build/lib/responses';
import { GrammarlyResult } from './api';
import { ProblemResponse } from './responses';

export interface TransformResult {
  /**
   * The transformed text
   */
  text: string;

  /**
   * How different is the length of this string to the previous?
   *
   * Positive numbers indicate a greater length, negative a shorter length.
   */
  diff: number;
}

/**
 * When applying a transform, the origin text gets offset by a certain amount. This means that the
 * responses that are to be applied next will be out of date, therefore they must be updated
 * every run.
 *
 * One application of the transform should
 *  - Replace the specified characters in the text
 *  - Get the total length diff
 *  - Update all other responses
 *  - return a new result object
 */
export function applyTransform(
  text: string,
  alert: ProblemResponse
): TransformResult {
  const replacement = alert.replacements[0];

  const substringToTransform = text.substring(alert.begin, alert.end);

  const transformed = replacement
    ? text.substring(0, alert.begin) + replacement + text.substring(alert.end)
    : text;

  const diff = replacement
    ? replacement.length - substringToTransform.length
    : 0;

  return {
    text: transformed,
    diff
  };
}

/**
 * Updates an alert's properties by the specified diff amounts
 *
 * @param alert the alert to update
 * @param diff how much to adjust by
 */
export function updateAlert(
  alert: ProblemResponse,
  diff: number
): ProblemResponse {
  const { begin, end, highlightBegin, highlightEnd, transformJson } = alert;

  const { e, s } = transformJson.context;

  return {
    ...alert,
    begin: begin + diff,
    end: end + diff,
    highlightBegin: highlightBegin + diff,
    highlightEnd: highlightEnd + diff,
    transformJson: {
      ...transformJson,
      context: {
        e: e + diff,
        s: e + diff
      }
    }
  };
}

/**
 * Corrects a Grammarly result and returns the updated object
 */
export function correct(result: GrammarlyResult): GrammarlyResult {
  const { alerts } = result;

  return alerts.reduce((prev, currentAlert) => {
    const { text, diff } = applyTransform(
      prev.corrected || prev.original,
      currentAlert
    );

    // Apply diff to every appropriate part of the following alerts
    prev.alerts.forEach((tbd, i) => {
      prev.alerts[i] = updateAlert(tbd, diff);
    });

    return {
      ...prev,
      corrected: text
    };
  }, result);
}
