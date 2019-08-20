export interface BaseResponse {
  id: number;
}

export interface Transform {
  s: number;
  e: number;
}

export interface TransformJson {
  context: Transform;
  highlights: Transform[];
}

export interface CardLayout {
  category: string;
  group: string;
  groupDescription: string;
  rank: number;
  outcome: string;
  outcomeDescription: string;
  outcomeRank: number;
}

/**
 * Base problem response. Reponses may have other properties
 * as indicated in the optional parameters.
 *
 * TODO: Expand interfaces to include all types of response
 */
export interface ProblemResponse {
  category: string;
  pid: number;
  rid: number;
  sid: number;
  begin: number;
  end: number;
  text: string;
  group: string;
  pname: string;
  rev: number;
  highlightBegin: number;
  highlightEnd: number;
  highlightText: string;
  replacements: any[];
  transformJson: TransformJson;
  impact: string;
  extra_properties: StringObject;
  cardLayout: CardLayout;
  categoryHuman: string;
  cost: number;
  action: string;
  id: number;

  point?: string;
  transforms?: string;
  title?: string;
  details?: string;
  explanation?: string;
  examples?: string;
  todo?: string;
  handbookLink?: string;
  sentence_no?: string;
  free?: string;
  phash?: string;
  pversion?: string;
}

/**
 * Sent by the server when checking of the text has been completed.
 */
export interface FinishedResponse {
  sid: number;
  rev: number;
  checkedBegin: number;
  checkedEnd: number;
  score: number;
  generalScore: number;
  removed: any[];
  errors: number;
  interrupts: number;
  skipped: number;
  rejected: number;
  blocked: number;
  dialect: string;
  foreign: boolean;
  action: 'finished';
}
