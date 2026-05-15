import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const astro = path.join(root, 'node_modules', 'astro', 'astro.js');
const port = process.env.PORT || '3000';

const child = spawn(process.execPath, [astro, 'preview', '--host', '--port', String(port)], {
  cwd: root,
  stdio: 'inherit',
});

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});
