// Regenera el bloque AUTO:ESTADO del README con la fecha y el ultimo commit que
// toca el contenido del website (landing/ o demo/). Se ejecuta automaticamente
// antes de cada build (hook `prebuild`), por lo que el README queda actualizado
// en cada build/deploy del website.
//
// Idempotente: si no hubo nuevos commits de landing/demo, no cambia nada.
// Filtra por landing/demo para que un commit que solo toca el README no se
// auto-referencie ni genere churn.
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const readmePath = resolve(root, 'README.md');
const START = '<!-- AUTO:ESTADO -->';
const END = '<!-- /AUTO:ESTADO -->';

const sh = (cmd) => {
  try {
    return execSync(cmd, { cwd: root, encoding: 'utf8' }).trim();
  } catch {
    return '';
  }
};

const sha = sh('git log -1 --pretty=%h -- landing demo') || '(sin commit)';
const subject = sh('git log -1 --pretty=%s -- landing demo') || '(sin commit)';
const date = sh('git log -1 --date=short --pretty=%cd -- landing demo') || new Date().toISOString().slice(0, 10);

const block = `${START}\n_Ultima actualizacion del contenido: ${date} · commit \`${sha}\` — ${subject}_\n${END}`;

let md = readFileSync(readmePath, 'utf8');
const re = new RegExp(`${START}[\\s\\S]*?${END}`);
if (re.test(md)) {
  const next = md.replace(re, block);
  if (next !== md) {
    writeFileSync(readmePath, next);
    console.log(`[update-readme] actualizado: ${date} · ${sha} — ${subject}`);
  } else {
    console.log('[update-readme] sin cambios (README ya al dia)');
  }
} else {
  writeFileSync(readmePath, `${md.trimEnd()}\n\n${block}\n`);
  console.log(`[update-readme] bloque AUTO:ESTADO agregado: ${date} · ${sha}`);
}
