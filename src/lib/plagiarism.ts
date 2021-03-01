import fetch from 'node-fetch';
import {
  AuthHostOrigin,
  buildAuth,
  buildAuthHeaders,
  getAuthCookies
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
export async function plagiarism(text: string, agent?: any): Promise<PlagiarismResult> {
  const { Host, Origin } = getPlagiarismHostOrigin();

  const auth = await buildAuth({
    origin: Origin,
    host: 'www.grammarly.com',
    authUrl: 'https://www.grammarly.com/plagiarism-checker',
    agent
  });

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
      body: text,
      agent
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
