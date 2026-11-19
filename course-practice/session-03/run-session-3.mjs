import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const labFolder = fileURLToPath(new URL('.', import.meta.url));
const guard = ['--import', './scripts/offline-guard.mjs'];

function run(args, capture = false) {
  const shownArgs = args.map((arg) => arg.includes('*') ? JSON.stringify(arg) : arg);
  console.log(`\n> node ${shownArgs.join(' ')}`);
  const result = spawnSync(process.execPath, args, {
    cwd: labFolder,
    encoding: 'utf8',
    stdio: capture ? ['inherit', 'pipe', 'pipe'] : 'inherit',
  });
  if (capture) {
    process.stdout.write(result.stdout ?? '');
    process.stderr.write(result.stderr ?? '');
  }
  if (result.error) console.error(result.error.message);
  return result;
}

console.log(`Session 3 practice folder: ${labFolder}`);
const runtime = run(['--version'], true);
if (runtime.status !== 0 || runtime.stdout.trim() !== 'v22.14.0') {
  console.error('Ask your trainer for Node 22.14.0 before running the exercise.');
  process.exit(1);
}

const checks = [
  ['scripts/check-setup.mjs'],
  [...guard, '--test', 'test/*.test.mjs'],
  [...guard, 'scripts/demo.mjs'],
];
for (const args of checks) {
  const result = run(args);
  if (result.status !== 0) {
    console.error('This check stopped early. Keep the output and ask your trainer before editing.');
    process.exit(result.status ?? 1);
  }
}

const practice = run([...guard, '--test', 'practice/accept-answer.test.mjs'], true);
if (practice.status === 1 && /^# pass 3\r?$/m.test(practice.stdout) && /^# fail 6\r?$/m.test(practice.stdout)) {
  console.log('\nThese are the expected starter counts: 3 pass and 6 intentionally fail.');
  console.log('Keep this output. After the one-file repair, the target is 9 practice passes.');
} else if (practice.status === 0) {
  console.log('\nThe practice suite passed. Use the actual summary above as evidence.');
} else {
  console.error('\nThe practice output differs from the expected starter counts. Keep the output and ask your trainer.');
}
process.exitCode = practice.status ?? 1;
