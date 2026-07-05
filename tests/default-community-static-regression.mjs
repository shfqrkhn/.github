import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

const files = [
  'README.md',
  'SECURITY.md',
  'CONTRIBUTING.md',
  'SUPPORT.md',
  'CODE_OF_CONDUCT.md',
  'profile/README.md',
  'docs/AI_MAINTAINER_HANDOFF.md',
  'docs/EVIDENCE_RECEIPT.md',
  'LICENSE'
];

const protectedNames = [
  'AutoYT',
  'Prediction_Hub',
  'Civic_SourceGraph_Canada',
  'MENTAT',
  '.codex-remote-attachments',
  'manual-overrides.json',
  'latest-simulation.json',
  'scoreboards'
];

const retiredPortfolioFolders = [
  'AI-Studio-Cleaner',
  'C3Pedal',
  'CommonGround',
  'Flexx-Files',
  'LedgerSuite',
  'Noodle-Nudge',
  'PMQuiz',
  'TS-Dash'
];

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

const read = (file) => readFileSync(join(root, file), 'utf8');
const forbiddenTrackedPathPattern = /(^|\/)(node_modules|offline|linkedin-post-package|test-results|playwright-report|\.codex-remote-attachments)(\/|$)|^data\/(manual-overrides\.json|latest-simulation\.json|scoreboards)(\/|$)|(^|\/).*\.((env)|(pem)|(key)|(p12)|(pfx))$|(^|\/)(exports?|backups?|logs?|scratch)(\/|$)/i;
const trackedFiles = execFileSync('git', ['ls-files'], { cwd: root, encoding: 'utf8' })
  .split(/\r?\n/)
  .filter(Boolean)
  .map((file) => file.replace(/\\/g, '/'));
const forbiddenTrackedFiles = trackedFiles.filter((file) => forbiddenTrackedPathPattern.test(file));
function gitArchiveEntries() {
  const archive = execFileSync('git', ['archive', '--format=tar', 'HEAD'], {
    cwd: root,
    maxBuffer: 128 * 1024 * 1024
  });
  const entries = [];
  for (let offset = 0; offset + 512 <= archive.length;) {
    const header = archive.subarray(offset, offset + 512);
    if (header.every((byte) => byte === 0)) break;
    const name = header.toString('utf8', 0, 100).replace(/\0.*$/, '');
    const prefix = header.toString('utf8', 345, 500).replace(/\0.*$/, '');
    const sizeRaw = header.toString('utf8', 124, 136).replace(/\0.*$/, '').trim();
    const size = sizeRaw ? parseInt(sizeRaw, 8) : 0;
    const fullName = [prefix, name].filter(Boolean).join('/');
    if (fullName) entries.push(fullName.replace(/\\/g, '/'));
    offset += 512 + Math.ceil(size / 512) * 512;
  }
  return entries;
}
const archiveEntries = gitArchiveEntries();
const forbiddenArchiveFiles = archiveEntries.filter((file) => forbiddenTrackedPathPattern.test(file));
const text = Object.fromEntries(files.map((file) => [file, read(file)]));
const allText = Object.values(text).join('\n');

for (const file of files) {
  assert(existsSync(join(root, file)), `Missing required default-community file: ${file}`);
}

const packageJson = JSON.parse(read('package.json'));
assert(packageJson.private === true, 'package.json must stay private.');
assert(packageJson.scripts?.test === 'node tests/default-community-static-regression.mjs', 'npm test must run the static regression check.');
assert(packageJson.scripts?.qa === 'npm test', 'npm run qa must run the full default-community gate.');
assert(forbiddenTrackedFiles.length === 0, `Forbidden tracked paths: ${forbiddenTrackedFiles.join(', ')}`);
assert(forbiddenArchiveFiles.length === 0, `Forbidden generated archive paths: ${forbiddenArchiveFiles.join(', ')}`);
for (const file of files) {
  assert(archiveEntries.includes(file), `Generated default-community archive must include public path: ${file}`);
}
for (const file of [
  '.github/FUNDING.yml',
  '.github/ISSUE_TEMPLATE/bug_report.yml',
  '.github/ISSUE_TEMPLATE/config.yml',
  '.github/ISSUE_TEMPLATE/feature_request.yml',
  '.github/PULL_REQUEST_TEMPLATE.md',
  '.github/workflows/static-check.yml',
  'tests/default-community-static-regression.mjs'
]) {
  assert(archiveEntries.includes(file), `Generated default-community archive must include shared metadata path: ${file}`);
}

assert(text['README.md'].includes('Default community health files'), 'README must describe default community health files.');
assert(text['README.md'].includes('Sponsor these projects'), 'README must keep the sponsor entry visible.');
assert(text['profile/README.md'].includes('https://shfqrkhn.github.io/'), 'Profile README must route to the portfolio.');
assert(text['SUPPORT.md'].includes('https://shfqrkhn.github.io/'), 'Support guidance must route discovery to the portfolio.');
assert(text['SUPPORT.md'].includes('https://github.com/sponsors/shfqrkhn?o=esb'), 'Support guidance must retain the sponsor path.');
assert(text['LICENSE'].startsWith('MIT License'), 'License must remain MIT.');

for (const file of ['SECURITY.md', 'CONTRIBUTING.md', 'CODE_OF_CONDUCT.md']) {
  assert(/secrets?|API keys?|private data|private information/i.test(text[file]), `${file} must warn against public sensitive-data disclosure.`);
}

assert(text['SECURITY.md'].includes('private vulnerability reporting'), 'Security guidance must prefer private vulnerability reporting.');
assert(text['docs/EVIDENCE_RECEIPT.md'].includes('Claim Firewall Invariant'), 'Evidence receipt must keep the claim firewall.');
assert(text['docs/EVIDENCE_RECEIPT.md'].includes('Safe-To-Publish Receipt'), 'Evidence receipt must keep safe-to-publish evidence.');
assert(text['docs/EVIDENCE_RECEIPT.md'].includes('no GitHub Releases'), 'Evidence receipt must preserve no-Releases policy.');
assert(text['docs/EVIDENCE_RECEIPT.md'].includes('gh release list --limit 5'), 'Evidence receipt must require a GitHub Releases absence check.');
assert(text['docs/EVIDENCE_RECEIPT.md'].includes('git archive'), 'Evidence receipt must tie default-community archive safety to generated archive evidence.');
assert(text['docs/EVIDENCE_RECEIPT.md'].includes('no open secret/dependabot/code-scanning alerts'), 'Evidence receipt must preserve alert evidence boundaries.');
assert(text['docs/EVIDENCE_RECEIPT.md'].includes('code-scanning not-applicable/no-analysis state'), 'Evidence receipt must preserve code-scanning no-analysis handling.');
assert(text['docs/EVIDENCE_RECEIPT.md'].includes("git rev-list --left-right --count 'HEAD...@{u}'"), 'Evidence receipt must preserve the PowerShell-safe upstream delta command.');
assert(text['docs/AI_MAINTAINER_HANDOFF.md'].includes('OmniOS Transfer Contract'), 'Handoff must keep OmniOS transfer terms.');
assert(text['docs/AI_MAINTAINER_HANDOFF.md'].includes('source-backed, reusable, non-secret'), 'Handoff must keep doctrine promotion boundaries.');

assert(!/\/releases\/latest/i.test(allText), 'Default community files must not point users to GitHub Releases.');
assert(!/\bgh\s+release\s+(create|upload|edit|delete)\b/i.test(allText), 'Default community files must not instruct release asset management.');

for (const name of [...protectedNames, ...retiredPortfolioFolders]) {
  assert(!allText.includes(name), `Public default-community files must not mention protected/private/retired surface: ${name}`);
}

console.log('Default community static regression passed.');
