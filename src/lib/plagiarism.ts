import fetch from 'node-fetch';
import {
  buildAuth,
  buildAuthHeaders,
  getAuthCookies,
  AuthHostOrigin
} from './auth';
import { buildCookieString } from './connection';

export interface PartialProblemResponse {
  category?: string;
  group?: string;
  categoryHuman?: string;
  count?: number;
}

export interface PlagiarismResult extends PartialProblemResponse {
  text: string;
  hasPlagiarism: boolean;
}

export function getPlagiarismHostOrigin(): AuthHostOrigin {
  return {
    Host: 'capi.grammarly.com',
    Origin: 'https://www.grammarly.com'
  };
}

/**
 * Free Plagiarism Checker
 *
 *
 * @author Stewart McGown
 */
export async function plagiarism(text: string): Promise<PlagiarismResult> {
  const { Host, Origin } = getPlagiarismHostOrigin();

  const auth = await buildAuth(
    Origin,
    'www.grammarly.com',
    'https://www.grammarly.com/plagiarism-checker'
  );

  const results: PartialProblemResponse[] = await fetch(
    'https://capi.grammarly.com/api/check',
    {
      method: 'POST',
      headers: buildAuthHeaders(
        buildCookieString(getAuthCookies(auth)),
        auth.gnar_containerId,
        Origin,
        Host
      ),
      body: text
    }
  ).then(r => r.json());

  const detected: PartialProblemResponse = results.find(
    r => r.category === 'Plagiarism' || r.group === 'Plagiarism'
  ) || {
    count: 0
  };

  // Extract plagiarism
  return {
    ...detected,
    text,
    hasPlagiarism: !!detected.count
  };
}
