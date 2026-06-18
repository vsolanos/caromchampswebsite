import { cpSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const log = (message) => console.log(`[build-website] ${message}`);

log('limpiando dist/');
rmSync(dist, { recursive: true, force: true });

log('copiando landing/ -> dist/');
cpSync(resolve(root, 'landing'), dist, { recursive: true });

log('copiando demo/ -> dist/demo/');
cpSync(resolve(root, 'demo'), resolve(dist, 'demo'), { recursive: true });

log('escribiendo dist/_headers');
writeFileSync(
  resolve(dist, '_headers'),
  [
    '/*',
    '  X-Frame-Options: SAMEORIGIN',
    '  X-Content-Type-Options: nosniff',
    '  Referrer-Policy: strict-origin-when-cross-origin',
    '',
    '/index.html',
    '  Cache-Control: no-cache, no-store, must-revalidate',
    '',
  ].join('\n'),
);

log('listo: website en dist/');
