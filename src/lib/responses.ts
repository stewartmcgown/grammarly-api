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

export interface ProblemResponse {
  hidden: boolean;
  category: string;
  pid: number;
  rid: number;
  sid: number;
  begin: number;
  end: number;
  text: string;
  group: string;
  pname: string;
  phash: string;
  pversion: string;
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
}
