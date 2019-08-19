import * as uuid from 'uuid';

export interface BaseMessage {
  /**
   * start: the initial action (used with type=initial | other)
   * submit_ot: submits some events for transforms
   * option: submit a change to an option
   */
  action: 'start' | 'submit_ot' | 'option';

  /**
   * ID for the connection. Usually pick 0.
   * Might have to keep a track of this internally.
   */
  id: number;
}

/**
 * A message we send to Grammarly
 *
 * Example:
 * ```json
 * {
 *  "type":"initial",
 *  "token":null,
 *  "docid":"dbe1760a-4b50-5876-3c41-aa05c9eef9c1",
 *  "client":"extension_chrome",
 *  "protocolVersion":"1.0",
 *  "clientSupports":[
 *     "free_clarity_alerts",
 *     "readability_check",
 *     "filler_words_check",
 *     "sentence_variety_check",
 *     "free_occasional_premium_alerts"
 *  ],
 *  "dialect":"british",
 *  "clientVersion":"14.924.2437",
 *  "extDomain":"editpad.org",
 *  "action":"start",
 *  "id":0
 * }
 * ````
 */
export interface InfoMessage extends BaseMessage {
  type: 'other' | 'initial';
  token?: any;

  /**
   * Some UUID string, should be consistent if you expect to retrieve the same doc.
   */
  docid: string;
  client: 'extension_chrome';
  protocolVersion: '1.0';

  /**
   * The capabilities of this session. Free users options listed below.
   * TODO: Make this include all options
   */
  clientSupports: [
    'free_clarity_alerts',
    'readability_check',
    'filler_words_check',
    'sentence_variety_check',
    'free_occasional_premium_alerts'
  ];

  dialect: 'british' | 'american';
  clientVersion: '14.924.2437';

  /**
   * Which domain does this request come from? Might be smart to keep this randomised.
   */
  extDomain: string;

  sid: number;
}

/**
 * A message containing information about an operational transform
 * taking place.
 */
export interface OTMessage {
  action: 'submit_ot';

  /**
   * An array of operational transform messages.
   *
   * Messages must conform to the
   */
  ch: string[];

  /**
   * Which revision number is this document?
   */
  rev: number;

  id: number;
}

/**
 * Convert a string to a basic initial insert
 *
 * @param str the string to insert
 * @param pos the existing position of the insert.
 */
export const stringToTransform = (str: string, pos?: string) => {
  return `0:${pos || '0'}:${str}:0`;
};

export const buildInitialMessage = (): InfoMessage => ({
  type: 'other',
  docid: uuid.v4(),
  client: 'extension_chrome',
  protocolVersion: '1.0',
  clientSupports: [
    'free_clarity_alerts',
    'readability_check',
    'filler_words_check',
    'sentence_variety_check',
    'free_occasional_premium_alerts'
  ],
  dialect: 'british',
  clientVersion: '14.924.2437',
  extDomain: 'json2ts.com',
  action: 'start',
  id: 0,
  sid: 0
});

export const buildOTMessage = (str: string): OTMessage => ({
  ch: [stringToTransform(str)],
  rev: 0,
  id: 0,
  action: 'submit_ot'
});
