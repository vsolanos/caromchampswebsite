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
