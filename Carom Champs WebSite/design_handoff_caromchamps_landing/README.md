# Handoff: CaromChamps — Landing Page (sitio comercial)

## Overview
Landing page de alto impacto para **CaromChamps**, una plataforma SaaS especializada en la
gestión integral de campeonatos de **carambola a tres bandas** (inscripción → grupos →
partidas → planillas → llaves → ranking → reportes → cierre). La página es de una sola columna,
scroll largo, en **español**, orientada a conversión (solicitar demo / empezar gratis / ver planes).
Incluye una **demo interactiva embebida** que muestra los módulos reales del producto.

## About the Design Files
Los archivos de `design/` son **referencias de diseño creadas en HTML** — un prototipo que muestra
el look & feel y el comportamiento previstos. **No son código de producción para copiar tal cual.**
La tarea es **recrear este diseño en el entorno del codebase destino** (React, Vue, Astro, Next, etc.)
usando sus patrones y librerías establecidas. Si todavía no existe un entorno, elige el framework más
apropiado (recomendación: **React + Vite** o **Next.js**, ya que la demo embebida está escrita en React)
e impleméntalo allí.

El prototipo original está construido como un "Design Component" (`.dc.html`) con un runtime propietario
(`support.js`). **No portes ese runtime.** Léelo solo como referencia de marcado/estilos. Toda la UI usa
**estilos inline** y **CSS custom properties** (los tokens de `design/tokens/`).

## Fidelity
**Alta fidelidad (hi-fi).** Colores, tipografía, espaciados, sombras, radios e interacciones son finales.
Recrea la UI **pixel-perfect** usando los tokens provistos. Donde el codebase ya tenga un design system,
mapea estos tokens a los equivalentes existentes; si no, adopta los tokens de `design/tokens/` como base.

---

## Estructura general de la página

Orden de secciones (de arriba a abajo). Ancho de contenido máximo **1200px**, centrado, con `padding: 0 32px`.
Fondo general blanco; ssecciones alternan blanco / marfil (`#F4F6EA`) / azul oscuro (degradado) para dar ritmo.

1. **Nav (barra de menú principal)** — sticky
2. **Hero** — fondo azul degradado, animado
3. **Stat band** — 4 métricas con contadores animados
4. **Plataforma (demo interactiva en vivo)** — fondo azul oscuro
5. **Funciones** — grid de 11 tarjetas
6. **Historial y rendimiento** — dashboard brandeado de jugador
7. **Torneo de ranking** — fondo azul, tabla acumulada
7b. **Mis juegos / My Games** — módulo personal del jugador (fondo blanco)
8. **Planillas IA / OCR** — spotlight con animación de escaneo
9. **Mesas de competición** — imagen + texto
10. **Planes** — 3 tarjetas + toggle mensual/anual + 2 bloques (On Demand / Federación)
11. **Segmentos** — grid de 5 tarjetas (incluye Jugadores)
12. **Franja de marca** — logo oficial centrado (antepenúltima)
13. **CTA final** — fondo azul degradado con imagen de fondo
14. **Footer** — azul oscuro

---

## Screens / Views (detalle por sección)

### 1. Nav (barra de menú principal)
- **Propósito:** navegación principal + CTAs. Permanece fija (`position: sticky; top: 0; z-index: 50`)
  para que el usuario salte entre secciones en cualquier momento.
- **Layout:** barra de **90px** de alto, fondo `rgba(255,255,255,.82)` con `backdrop-filter: blur(14px)`,
  borde inferior `1px solid var(--cc-border)`. Contenido en flex `space-between`, ancho máx 1200px.
- **Componentes:**
  - **Logo (izquierda):** `assets/logo-full-trim.png` a `height: 74px`. (Es el lockup oficial completo
    recortado a su contenido — el PNG sin recortar tiene ~83% de margen transparente y se ve diminuto;
    **usa la versión `-trim`**.) Enlaza a `#top`.
  - **Links centrales (flex, gap 30px):** Producto `#producto`, Rendimiento `#rendimiento`,
    Funciones `#funciones`, Planes `#planes`, Segmentos `#segmentos`.
    Estilo: 14.5px, weight 500, color `--cc-text-muted`; hover → color `--cc-azul-mesa`.
  - **Acciones (derecha):** "Iniciar sesión" (link, 14.5px, weight 600, color `--cc-azul-profundo`)
    + botón **"Solicitar demo"** (altura 42px, padding 0 18px, radius 10px, bg `--cc-primary`,
    texto blanco, weight 600; hover bg `--cc-primary-hover` + `--cc-shadow-brand`).

### 2. Hero
- **Propósito:** captar y comunicar la propuesta de valor; CTA principal.
- **Layout:** `position: relative; overflow: hidden`. Fondo:
  `linear-gradient(150deg, #1B3F8F 0%, #122C6B 45%, #0A1838 100%)`. Texto blanco.
  Grid de 2 columnas `1.05fr / .95fr`, gap 48px, padding `86px 32px 100px`.
- **Fondo animado:** SVG full-bleed con dos trayectorias de carambola (curvas Bézier) que se "dibujan"
  (`stroke-dashoffset` animado, keyframe `cc-draw` 2.6–2.8s) + dos bolas (`<circle>`) que recorren las
  trayectorias con `offset-path` (keyframe `cc-ball`, 7s y 9s, infinito). Opacidad del SVG .38.
  Un resplandor radial azul arriba-derecha. **Respeta `prefers-reduced-motion`** (desactiva animaciones).
- **Columna izquierda (texto):**
  - **Logo oficial blanco** `assets/logo-full-white.png`, `height: 104px`, `margin-bottom: 26px`,
    con `filter: drop-shadow(0 8px 28px rgba(5,8,25,.5))`.
  - **Badge** "Especializada en carambola a 3 bandas" (pill, icono diana, fondo `rgba(36,92,232,.16)`,
    borde `rgba(36,92,232,.32)`, texto `--cc-blue-300`, 13px).
  - **H1:** "Precisión deportiva. / Control digital." — Montserrat, 58px, weight 800, line-height 1.02,
    letter-spacing -.035em. "Precisión deportiva." en blanco; "Control digital." en `--cc-amarillo-carambola`.
    `text-shadow: 0 2px 24px rgba(5,8,25,.45)`.
  - **Párrafo:** 18px, line-height 1.62, color `#DDE6F5`, máx 520px.
  - **CTAs (flex, gap 14px):** "Solicitar demo" (botón primario, 54px alto, radius 12px, bg `--cc-primary`,
    `--cc-shadow-brand`, icono flecha; hover bg `--cc-blue-400`) + "Ver la plataforma" (botón outline,
    `box-shadow: inset 0 0 0 1.5px rgba(255,255,255,.32)`; hover bg `rgba(255,255,255,.08)`).
  - **Línea de mercados:** icono globo + "Colombia · México · España · Francia · Bélgica · Alemania · Austria · Corea",
    12.5px, color `--cc-gris-tecnico`.
- **Columna derecha (mockup flotante):** tarjeta de producto (radius 16px, sombra
  `0 44px 90px rgba(0,0,0,.5)`, borde `rgba(255,255,255,.14)`) que flota (keyframe `cc-float`, 6s).
  Contiene barra de ventana (3 dots semáforo + "app.caromchamps.com"), 2 KPI cards (Promedio general 1.182,
  Partidas 184) y una tabla "Grupo A — Posiciones" con 3 filas (avatar inicial, nombre, AVG, badge de estado).
  - **Adornos:** un retrato circular (image-slot, 108px) abajo-izquierda con anillo degradado, y 3 bolas
    (blanca/amarilla/roja) arriba-derecha.

### 3. Stat band
- **Layout:** fondo blanco, borde inferior, padding `40px 32px`, grid 4 columnas, gap 24px, centrado.
- **Cada métrica:** número grande (Montserrat 38px, weight 800, color `--cc-azul-mesa`, tabular-nums) +
  label (13.5px, `--cc-text-muted`). Los números **cuentan hacia arriba** al entrar en viewport
  (IntersectionObserver, easing ease-out-cubic, ~1300ms). Valores:
  - 8 — mercados prioritarios
  - 8 — módulos operativos
  - 100% — operación digital
  - 5 — idiomas de localización

### 4. Plataforma (demo interactiva en vivo)
- **Propósito:** mostrar el producto real. Es el bloque más complejo.
- **Layout:** fondo `--cc-gradient-deep` (azul casi negro), padding `96px 0`, resplandor radial azul arriba.
  Encabezado centrado (overline "La plataforma", H2 "Toda la operación del torneo, en vivo", párrafo).
- **El componente (`platform-demo.jsx`):** una ventana de navegador (radius 18px, sombra fuerte) con:
  - **Barra de ventana** (azul profundo): 3 dots semáforo + URL "app.caromchamps.com / {módulo}" +
    pill **"Auto"** a la derecha (indica recorrido automático activo, con dot pulsante amarillo).
  - **Tab strip** (barra de menú, fondo blanco, scroll horizontal): **logo oficial** `assets/logo-full.png`
    a 38px + separador vertical + 8 tabs (icono Lucide + label):
    Dashboard, Inscripciones, Grupos, Partidas, Planillas IA, Llaves, Reportes, Cierre.
    Tab activo: bg `--cc-primary`, texto blanco, `--cc-shadow-brand`. Inactivo: transparente,
    `--cc-text-muted`; hover bg `--cc-blue-50`.
  - **Área de pantalla** (alto 600px, scroll, bg `--cc-surface-app`, padding 24/26px): título del módulo
    (Montserrat 22px) — en Dashboard, Inscripciones y Llaves se muestra además el **logo oficial**
    `logo-full.png` a 38px en la cabecera — y el contenido del módulo.
- **Comportamiento clave — AUTO-RECORRIDO:** al cargar, el demo **avanza solo** por los 8 módulos cada
  **3200ms** (cíclico). Se **pausa al hacer hover** sobre la ventana. Al **hacer clic** en un tab se
  detiene el auto y queda manual; el pill "Auto"/"Pausa" permite reactivarlo. Respeta `prefers-reduced-motion`.
- **Importante para la reimplementación:** en el prototipo, los contenidos de cada módulo (Dashboard,
  Inscripciones, etc.) provienen del **bundle del design system** (`_ds_bundle.js`, globals `window.CCScreens`,
  `window.CCIcon`, `window.CCData`). En el codebase destino, **reemplaza estas pantallas por las pantallas
  reales del producto** (las del propio app). El wrapper (ventana + tabs + auto-recorrido) es lo que hay que
  recrear; las pantallas internas son del producto real. Lista de módulos y sus títulos en `platform-demo.jsx`
  (`NAV` y `TITLES`).

### 5. Funciones
- **Layout:** fondo blanco, padding `96px 0`. Encabezado (overline "Funciones", H2, párrafo). Grid
  **`repeat(auto-fit, minmax(250px, 1fr))`**, gap 22px. **11 tarjetas.**
- **Cada tarjeta:** bg blanco, borde `--cc-border`, radius 16px, padding 28px, `--cc-shadow-xs`;
  hover → `--cc-shadow-md` + `translateY(-4px)`. Icono Lucide en cuadro `--cc-blue-50` (color `--cc-azul-mesa`,
  padding 13px, radius 13px) + título (Montserrat 19px, weight 700, `--cc-azul-profundo`) + descripción
  (14.5px, `--cc-text-muted`, line-height 1.62). Aparecen con **scroll-reveal** (fade + slide-up, stagger).
- **Las 11 funciones (título — descripción):**
  1. Especialización real — Diseñada para la lógica competitiva de la carambola a 3 bandas, no un generador genérico de llaves.
  2. Operación completa — Inscripción, grupos, calendario, partidas, llaves, reportes y cierre — todo el ciclo del campeonato.
  3. Planillas oficiales con QR — Planillas con estructura deportiva real, códigos y QR para control y trazabilidad.
  4. Planillas IA / OCR — Lectura inteligente de planillas en PDF o imagen para reducir el trabajo manual.
  5. Historial y rendimiento — Historial deportivo por jugador: promedio, carambolas, entradas y evolución por partida en todos los campeonatos.
  6. Torneo de ranking — Agrupe varios campeonatos, controle el puntaje por jugador y defina al campeón general acumulado.
  7. Múltiples formatos de campeonato — Eliminación simple, fase de grupos + eliminación simple, doble fase de grupos y control por sets.
  8. Conformación flexible de grupos — Sorteo aleatorio (random), por cabezas de grupo y esquemas tipo snake para un balance justo.
  9. Reportería institucional — Reporte 5, acta final y documentación oficial lista para clubes, asociaciones y federaciones.
  10. Dashboard multi-campeonato — Tablero ejecutivo con indicadores de rendimiento y control de todos los campeonatos activos a la vez.
  11. Mis juegos / My Games — Historial personal del jugador, registro de partidas externas, análisis de rendimiento y modo juego entre usuarios con opción de compartir en redes.
- Iconos Lucide usados: target, layers, scan-line, sparkles, line-chart, trophy, git-merge/brackets, shuffle, file-text, grid, gamepad.

### 6. Historial y rendimiento (id `#rendimiento`)
- **Layout:** fondo `--cc-blanco-marfil`, padding `96px 0`. Encabezado + un **dashboard brandeado** (card
  radius 20px, `--cc-shadow-xl`, borde, bg blanco), scroll-reveal.
- **Header del dashboard:** degradado `linear-gradient(135deg, #1A43A8, #245CE8)`, texto blanco. Avatar
  circular con iniciales "ÓB" + título "Historial de jugador · Óscar Barquero" + subtítulo
  "Todos los campeonatos · País CR · Asociación ASOBIGRE" + botón "Cerrar" (pill blanco).
- **Cuerpo** (bg `--cc-surface-app`, padding 22/26px):
  - **Fila de 6 KPIs** (grid 6 col): PJ 14, PG 8, PP 6, CAR 331, ENT 402, AVG total 0.823. Cada uno: card
    blanco, label 11.5px, número Montserrat 28px weight 800, tabular-nums.
  - **Tabla "Promedios por campeonato"** (card blanco): header de columnas (Campeonato, Estado, PJ, PG, CAR,
    ENT, AVG, acción). 3 filas con badge de estado de color (azul "DEMO_READY", amarillo "GROUPS_CLOSED",
    gris "CONFIGURED") y "Ver partidas →".
  - **Gráfico "Comportamiento de promedio por partida":** SVG line chart (eje Y 0.000–1.650, polilínea azul
    `--cc-azul-mesa`, 12 puntos; punto destacado rojo, resto amarillos). Tarjeta de detalle abajo (bg
    `--cc-celeste-ui`): "P-014 · Grupo 3 — AVG 0.933 · 28 carambolas / 30 entradas · Marcador 28–35 · Finalizada".
- *Nota:* "País CR" indica Costa Rica como mercado base/origen (no es uno de los 8 mercados prioritarios).

### 7. Torneo de ranking (id `#ranking`)
- **Layout:** fondo `linear-gradient(150deg, #16357C 0%, #0C1E48 100%)`, texto blanco, padding `96px 0`,
  `overflow: hidden`, resplandor radial amarillo arriba-derecha. Grid 2 col `.95fr / 1.05fr`, gap 56px.
- **Izquierda:** badge amarillo "Torneo de ranking" (bg `--cc-amarillo-carambola`, texto `--cc-azul-profundo`,
  icono trofeo). **H2 "Un campeón general a través de varios campeonatos"** — Montserrat 38px, weight 800,
  **color `#FFFFFF`** (importante: forzar blanco, el estilo base lo pondría oscuro). Párrafo `#C9D2E3`.
  3 bullets con check amarillo: agrupar campeonatos / puntaje por jugador / tabla acumulada + campeón automático.
- **Derecha (tabla "Ranking General 2026"):** card blanco, header (título + "4 campeonatos · 64 jugadores" +
  badge "En curso"). Columnas: #, Jugador, C1, C2, C3, C4, Total. 5 filas; el **líder** (Óscar Barquero, total
  365) resaltado con bg `--cc-warning-soft`, posición naranja `#C45A00` e icono de trofeo junto al nombre.
  Filas: Óscar Barquero 365, Daniel Acosta 347, Greivin López 332, Marvin Chacón 313, Pablo Beltrán 295.
  Pie: "Óscar Barquero lidera el ranking general · campeón provisional".

### 7b. Mis juegos / My Games (id `#misjuegos`)
- **Propósito:** el módulo personal del jugador (plan Jugador). Fondo blanco, padding `96px 0`. Grid 2 col
  `1.02fr / .98fr`, gap 56px.
- **Izquierda:** badge "Mis juegos / My Games" (icono gamepad). H2 "El espacio personal de cada jugador".
  Párrafo. 5 checks verdes: registro manual de partidas externas / modo juego entre usuarios con detalle de
  tipos de carambola y efectividad / análisis de evolución del AVG e historial / compartir resultados con otros
  jugadores y en redes sociales / **actualización automática de partidas entre instancias CaromChamps (ver
  historial de otros clubes, salas, asociaciones o federaciones)**. Dos pills: "Starter · historial 6 meses +
  inscripción directa" y "Jugador Pro · historial ilimitado + redes · $50/año".
- **Derecha (mock del módulo, card oscura `linear-gradient(155deg,#14223F,#0A1424)`):** cabecera VS con jugador
  "Víctor Solano" (JUG-0006 · ASOBIGRIE · CR); **franja de sincronización entre instancias** ("Sincronizado con
  ASOBIGRIE, FECOBI y 2 salas"); fila de 4 indicadores (Mis partidas 5, Finalizadas 5, Victorias 3, Promedio
  0.938); mini-gráfico SVG de evolución del promedio; pie con "Compartir rendimiento" + "Agregar historial manual".
- *Nota:* el mock es ilustrativo — en producción consume el módulo real del app.

### 8. Planillas IA / OCR (spotlight)
- **Layout:** fondo `--cc-surface-app`, padding `96px 0`. Grid 2 col, gap 56px.
- **Izquierda:** badge "Planillas IA / OCR" (icono sparkles), H2 "Digitalice la planilla oficial en segundos",
  párrafo, 3 checks verdes (lectura automática / AVG al instante / QR para auditoría).
- **Derecha (mock de planilla):** card blanco con una **línea de escaneo** animada (degradado azul horizontal
  con glow, keyframe `cc-scan`, recorre de arriba abajo, 2.8s infinito). Header "Planilla oficial · Partida 184"
  + badge "Revisando IA" (amarillo). 2 cards de jugador (Caudron AVG 1.428 / Jaspers AVG 1.357) + tarjeta de
  trazabilidad con QR (SVG) "Acta verificable y auditable".

### 9. Mesas de competición
- **Layout:** fondo blanco, padding `96px 0`. Grid 2 col `1.1fr / .9fr`, gap 52px.
- **Izquierda:** imagen (image-slot rect, 100% × 420px, radius 20px, `--cc-shadow-lg`, bg `--cc-azul-profundo`).
- **Derecha:** overline "El escenario", H2 "Mesas de competición a la altura del campeonato", párrafo, 3 pills
  (Superficie de competición / Asignación de mesas por partida / Control de sala y horarios).

### 10. Planes (id `#planes`)
- **Layout:** fondo `--cc-surface-app`, padding `96px 0`. Encabezado centrado. **Toggle Mensual/Anual**
  (segmented pill, bg `--cc-gray-100`; activo bg blanco + `--cc-shadow-xs`, texto `--cc-azul-mesa`). El toggle
  "Anual" lleva un badge verde "−2 meses".
- **3 tarjetas de plan** (grid 3 col, align-items start):
  - **Starter:** $0 / Para siempre. Botón outline "Empezar gratis". 4 features. (Precio fijo.)
  - **Club (destacado):** borde 2px `--cc-azul-mesa`, badge "Más popular". Precio **$20/mes** o **$200/año**
    (cambia con el toggle). Botón primario "Elegir Club". 5 features.
  - **Pro:** **$50/mes** o **$500/año**. Botón outline "Elegir Pro". 5 features.
  - Sufijo precio: "/mes" o "/año" según toggle. Checks verdes `--cc-verde-exito`.
- **2 bloques inferiores** (grid 2 col):
  - **Evento On Demand:** "desde **$1.25 / jugador**" (⚠ precio oficial $1.25, no $1.50). Texto + botón
    outline "Calcular evento".
  - **Federación / Asociación:** card azul oscuro (`--cc-gradient-deep`), "Cotización anual", botón primario
    "Hablar con ventas".
- **Franja Jugador Pro** (debajo de los 2 bloques): banda con degradado `linear-gradient(135deg,#1A43A8,#245CE8)`,
  icono gamepad, título "Jugador Pro" + badge "Para jugadores", descripción (Mis juegos / My Games con historial
  ilimitado y compartir en redes; Starter incluye 6 meses + inscripción directa), precio **$50 /año** y botón
  blanco "Activar Jugador Pro".

### 11. Segmentos (id `#segmentos`)
- **Layout:** fondo blanco, padding `96px 0`. Encabezado + grid `repeat(auto-fit, minmax(210px,1fr))`, gap 20px.
  Tarjetas bg `--cc-blanco-marfil`, borde `#E6E7DA`, radius 16px; hover translateY(-4px) + shadow. Icono en cuadro blanco.
  - Clubes y salas / Asociaciones / Federaciones / Eventos grandes / **Jugadores** (icono + título + descripción).

### 12. Franja de marca (antepenúltima)
- **Layout:** fondo `--cc-blanco-marfil`, padding `72px 0`, centrado. **Logo oficial a color**
  `assets/logo-full.png` a `height: 150px` + claim "PRECISIÓN DEPORTIVA. CONTROL DIGITAL." (Montserrat,
  weight 700, 16px, letter-spacing .14em, uppercase, color `--cc-azul-mesa`).

### 13. CTA final
- **Layout:** `position: relative; overflow: hidden`, padding `100px 0`, fondo `--cc-gradient-table`, texto
  blanco, centrado. **Imagen de fondo** (image-slot rect, full, opacidad .22) + overlay degradado
  `linear-gradient(135deg, rgba(26,67,168,.78), rgba(36,92,232,.62))`.
- H2 "La carambola organizada con precisión profesional" (42px), párrafo, 2 CTAs (botón blanco "Solicitar demo"
  + outline "Empezar gratis").

### 14. Footer
- **Layout:** fondo `--cc-azul-profundo`, padding `40px 0`. Flex space-between: **logo oficial blanco**
  `assets/logo-full-white.png` (height 56px) + texto descriptivo + copyright "© 2026 CaromChamps · Precisión
  deportiva. Control digital." (color `--cc-gris-tecnico`).

---

## Interactions & Behavior
- **Nav sticky:** la barra principal queda fija al hacer scroll (`position: sticky; top: 0`). *Gotcha:* no
  pongas `overflow-x: hidden` en un ancestro del nav — rompe el sticky. Recorta los desbordes localmente en
  las secciones que lo necesiten (hero, ranking, CTA usan `overflow: hidden` en su propia `<section>`).
- **Scroll-reveal:** tarjetas de Funciones, Segmentos y los dashboards de Rendimiento/Ranking entran con
  fade + `translateY(26→0)`, transición .6s `--cc-ease`, stagger por índice (~70ms). IntersectionObserver
  threshold .15, se desuscribe tras revelar.
- **Contadores animados:** stat band cuenta hacia el valor al entrar en viewport (ease-out-cubic, ~1.3s).
- **Demo auto-recorrido:** ver sección 4. Auto-avance 3.2s, pausa en hover, stop en click, toggle Auto/Pausa.
- **Toggle de planes:** Mensual/Anual recalcula precios de Club ($20/$200) y Pro ($50/$500) y el sufijo.
- **Animaciones decorativas:** trayectorias del hero (`cc-draw`, `cc-ball`, `cc-float`), línea de escaneo de
  Planillas (`cc-scan`), pulso del indicador Auto (`cc-pulse`).
- **`prefers-reduced-motion`:** todas las animaciones se desactivan (regla global + guard en JS del demo).
- **Hover states:** botones primarios oscurecen + ganan `--cc-shadow-brand`; tarjetas elevan con translateY +
  sombra; links de nav cambian a `--cc-azul-mesa`.
- **Image slots:** en el prototipo, los retratos/imágenes de mesa/fondo CTA son "image-slots" donde el usuario
  arrastra su foto. En producción, **reemplázalos por `<img>` con las imágenes licenciadas finales** (o un
  uploader si aplica). No hay fotos de jugadores embebidas por derechos de imagen.

## State Management
- `annual: boolean` (toggle de planes) → controla precios y sufijos de Club/Pro.
- Demo: `active: string` (módulo actual), `auto: boolean` (recorrido on/off), `paused: boolean` (hover),
  `ready: boolean` (pantallas del producto cargadas).
- Sin data-fetching en la landing. En el demo real, las pantallas internas consumirán los datos del propio app.

## Design Tokens
Valores exactos en `design/tokens/` (`colors.css`, `typography.css`, `effects.css`, `fonts.css`). Resumen:

**Colores de marca**
- Azul mesa (primario / CTAs): `#245CE8`
- Azul profundo (fondos premium / texto): `#050819`
- Rojo carambola: `#C80F1D` · Amarillo carambola: `#F5C116` · Blanco marfil: `#F4F6EA` · Gris técnico: `#B3B0AE`
- Escala azul 50→950 y escala gris 50→900 (ver `colors.css`).
- Estados: éxito `#157A3A`, acción/naranja `#C45A00`; fondos suaves success/warning/action/danger/active/pending.
- Texto: principal `#111827`, secundario `#64748B`. Borde por defecto `--cc-gray-200 (#E5E9F0)`.

**Tipografía**
- Display/marketing: **Montserrat** (alt Sora) — 600/700/800.
- UI & datos: **Inter** — 400/500/600/700. Datos/métricas con **tabular-nums** (`font-variant-numeric`).
- Escala: display 52px, H1 40px, H2 28px, H3 20px, body 16px, body-sm 14px, caption 12px, data 18px, data-lg 32px.
  (En la landing, el H1 del hero se sube a 58px y varios H2 de sección a 36–40px — valores indicados por sección.)
- Letter-spacing: tighter -.03em, tight -.015em; caps/overlines +.08em uppercase.
- El **wordmark del logo es arte (imagen)** — nunca se reproduce con webfont.

**Radios:** xs 4 · sm 6 · md 10 · lg 14 · xl 20 · 2xl 28 · pill 999.
**Sombras:** xs/sm/md/lg/xl (soft, low-spread, base rgba(5,8,25,…)) + `--cc-shadow-brand` (tinte azul para CTAs).
**Transiciones:** ease `cubic-bezier(.22,.61,.36,1)`, ease-in-out `cubic-bezier(.4,0,.2,1)`; dur 120/180/280ms.
**Gradientes:** table `linear-gradient(135deg,#1A43A8,#245CE8,#5380F0)`, deep `linear-gradient(160deg,#0B1538,#050819)`,
data `linear-gradient(90deg,#245CE8,#F5C116)`. (El hero usa una variante propia de 3 paradas indicada arriba.)

## Assets
En `design/assets/` (logos oficiales de la marca):
- `logo-full.png` (1672×941) — lockup oficial completo (doble-C + 3 bolas + wordmark + taco). **~83% es margen
  transparente.**
- `logo-full-trim.png` (1248×840) — el mismo logo **recortado a su contenido**; úsalo en la nav y donde el logo
  deba verse grande/nítido a poca altura.
- `logo-full-white.png` — lockup completo en blanco (para fondos oscuros: hero, footer). *Nota:* las tres bolas
  llevan máximo 2 puntos azules cada una (versión simplificada, a pedido del cliente).
- `logo-mark.png` / `logo-mark-white.png` — isotipo compacto (solo doble-C + bolas), para espacios mínimos.
- Fuentes: Google Fonts (Montserrat, Sora, Inter) — ver `tokens/fonts.css`.
- Iconos: **Lucide** (los SVG están inline en el HTML; en el codebase usa `lucide-react` o equivalente).
- Imágenes de jugadores/mesas: **no incluidas** (derechos de imagen). Reemplaza los image-slots por las imágenes
  licenciadas finales.

## Files
En `design/`:
- `CaromChamps Landing.dc.html` — **el diseño completo** (estructura, estilos inline, lógica de animaciones,
  toggle de planes, datos de las tarjetas). Es la fuente de verdad. Ignora el wrapper `<x-dc>`/`support.js`.
- `platform-demo.jsx` — wrapper de la **demo interactiva** (ventana + tabs + auto-recorrido). Recréalo;
  sustituye las pantallas internas por las del producto real.
- `image-slot.js` — componente de placeholder de imagen del prototipo (no portar; usar `<img>`/uploader).
- `support.js` — runtime del prototipo (**no portar**, solo referencia).
- `tokens/*.css` — tokens del design system (colors, typography, effects, fonts). **Adóptalos.**
- `styles.css`, `_ds_bundle.js` — hoja base y bundle del design system (incluye los componentes de las pantallas
  del demo: `CCScreens`, `CCIcon`, `CCData`). Referencia para entender las pantallas internas del producto.

### Cómo abrir el prototipo
El `.dc.html` usa un runtime propietario y no se abre como HTML plano. Para **ver** el diseño tal cual, pídele
a quien te pasó este paquete una **exportación HTML autónoma** (un solo archivo) o un PDF/― o trabaja desde la
documentación de este README, que es autosuficiente. El marcado y los estilos inline dentro del `.dc.html` son
legibles directamente como referencia de implementación.

---

## Actualizaciones recientes (Copa Mundo, Formatos y Solicitar demo)

- **Sección "Arquitectura competitiva" (`#arquitectura`, label de nav "Formatos").** Muestra la infografía de
  formatos de campeonato, métodos de conformación de grupos, rondas preliminares (Ronda 0) y **Copa Mundo**.
  En el prototipo se incrusta el DC `Infografia Arquitectura Competitiva.dc.html` (incluido en `design/`),
  escalado responsivamente al ancho. En producción, recrea esa infografía como sección responsiva nativa
  (o expórtala a imagen) — su contenido y estilos están en ese archivo.
- **Copa Mundo CaromChamps** — formato insignia añadido como 12.ª función ("Copa Mundo CaromChamps") y al
  texto de "Múltiples formatos de campeonato". Flujo: clasificatorias configurables PrePreQualy → PreQualy →
  Qualy → Cuadro Principal (48 jugadores) → KO 32 (eliminación simple desde 32). Grupos de 3-4, clasifican por
  puntaje y promedio, 16 grupos de 4, clasifican 2 por grupo, sembrados directos + clasificados del Qualy.
- **Sección "Solicitar demo" (`#demo`).** Agendamiento embebido con un **iframe de Google Calendar
  Appointment Scheduling** (`https://calendar.google.com/calendar/appointments/schedules/…?gv=true`,
  width 100% / height 600). **Todos los botones "Solicitar demo"** (nav, hero y CTA final) apuntan a `#demo`
  (`href="#demo"`); "Empezar gratis" y los CTA de planes siguen apuntando a `#planes`. En la implementación
  real, sustituye el iframe por el widget de agendamiento del cliente o intégralo con tu sistema de reservas.
