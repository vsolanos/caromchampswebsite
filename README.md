# CaromChamps Website

Repositorio separado para la pagina publica de CaromChamps.

Contenido principal:

- `landing/`: pagina publica de marketing.
- `demo/`: demo interactiva embebida desde la landing.
- `Carom Champs WebSite/`: handoff/descomprimido original de diseño.

## Build local

```cmd
npm run build
```

El build genera `dist/` con:

- `/` -> landing.
- `/demo/` -> demo interactiva.

## Nota operativa

El repo de app `caromchamps` sigue desplegando temporalmente landing + demo + app en un unico proyecto Cloudflare Pages para mantener operativo `www.caromchamps.com/caromchampsapp/`.

Cuando Cloudflare quede separado por dominio/subdominio/regla Worker, este repo debe ser la fuente canonica de la pagina publica y sus commits deben hacerse aqui.

## Cambios recientes

- 2026-06-21 — Landing alineada al handoff de diseno V2 (`CaromChamps Landing.dc.html`):
  nueva seccion **Mis juegos / My Games** (mock del modulo), franja **Jugador Pro**
  en Planes, segmento **Jugadores** y tarjeta de funcion #11.

Estructura de la landing: Hero · Demo en vivo · Funciones (11) · Historial y
rendimiento · Torneo de ranking · Mis juegos / My Games · Planillas IA · Mesas ·
Planes · Segmentos (5) · Marca · CTA · Footer.

<!-- AUTO:ESTADO -->
_Ultima actualizacion del contenido: 2026-06-21 · commit `490b416` — feat(landing): seccion Mis juegos, franja Jugador Pro y segmento Jugadores (handoff V2)_
<!-- /AUTO:ESTADO -->

> El bloque "Ultima actualizacion del contenido" se regenera **automaticamente** en
> cada `npm run build` (hook `prebuild` → `scripts/update-readme.js`), a partir del
> ultimo commit que toca `landing/` o `demo/`. No editarlo a mano.
