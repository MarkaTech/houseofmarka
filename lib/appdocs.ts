import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const DIR = path.join(process.cwd(), 'content', 'appdocs');

/** Render one app legal/support document from content/appdocs/<name>.md */
export function getAppDoc(name: string): string {
  const raw = fs.readFileSync(path.join(DIR, `${name}.md`), 'utf-8');
  return marked.parse(raw, { async: false }) as string;
}
