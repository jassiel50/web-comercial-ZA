# Handoff: Portafolio ZA Desarrollo Software

## Overview
Sitio multi-página (8 páginas) para ZA Desarrollo Software, portafolio de un desarrollador full-stack freelance (Ing. Jassiel Zamarrón) especializado en Blazor WebAssembly, C#, SQL Server y Radzen. Dark mode, un solo acento morado, tipografía Inter + JetBrains Mono, microinteracciones sutiles (scroll-reveal, hover states, botón flotante de WhatsApp).

## About the Design Files
Los archivos en `pages/` son **referencias de diseño hechas en HTML** (un formato propio de esta herramienta: `.dc.html`, HTML normal con estilos inline). No son código de producción para copiar tal cual. La tarea es **recrear este diseño en el stack que elijas** (Next.js, Astro, HTML/CSS estático, etc.) — no son componentes React ni nada framework-specific, así que ábrelos directo en el navegador para ver el diseño y el comportamiento, y usa el HTML como referencia exacta de estructura, copy y estilos.

## Fidelity
**Alta fidelidad (hifi).** Colores, tipografía, espaciado e interacciones están definidos y listos — recréalos pixel-perfect. El contenido (textos, número de WhatsApp, nombre) ya es el real del cliente, no placeholder.

## Screens / Views

1. **Home** (`index.dc.html`) — Hero con imagen (`assets/hero-main.jpg`), badge de disponibilidad (glass), CTAs, tira de stack tags, panel de producto simulado (stats en vivo + mini gráfica + actividad + roles + snippet de API), 3 proyectos destacados (cards con imagen), sección de 3 principios con iconos, tabla comparativa (sistema a medida vs hojas de cálculo vs software genérico) usando la clase `.table` del DS, CTA final.
2. **Proyectos** (`proyectos.dc.html`) — Listado de los 3 casos de estudio en filas grandes (imagen + texto).
3. **Caso de estudio × 3** (`caso-inventario.dc.html`, `caso-portal.dc.html`, `caso-plataforma.dc.html`) — Header con tags, imagen hero con badge glass "", layout de 2 columnas: Problema/Solución (con 2 imágenes) a la izquierda, sidebar "El resultado" con bloques de borde izquierdo acentuado a la derecha, stack técnico, CTA.
4. **Sobre mí** (`sobre-mi.dc.html`) — Hero 2 columnas (texto + foto), 6 tarjetas de stack con icono, 4 tarjetas de "forma de trabajo" con icono, CTA.
5. **Servicios** (`servicios.dc.html`) — Hero 2 columnas (texto + imagen), 6 tarjetas de servicio (icono + texto + stack tags), 5 pasos de proceso numerados, CTA.
6. **Contacto** (`contacto.dc.html`) — Badge de disponibilidad (glass), tarjetas de WhatsApp/correo, imagen con badge glass, formulario de consulta (Nombre/Empresa/Correo/Descripción — el submit abre el cliente de correo con los datos vía `mailto:`), FAQ acordeón.

Cada página comparte: header sticky con efecto glass (`backdrop-filter: blur(10px)` sobre fondo semitransparente), menú de hamburguesa que abre un overlay a pantalla completa, footer, y un botón flotante de WhatsApp (círculo, esquina inferior derecha, con animación de pulso).

## Interactions & Behavior
- **Header glass**: `background: color-mix(in srgb, var(--color-bg) 88%, transparent); backdrop-filter: blur(10px)`. El mismo tratamiento se reusa en badges y en etiquetas superpuestas sobre imágenes.
- **Menú móvil**: botón hamburguesa (2 líneas) → overlay fullscreen con links grandes y CTA de WhatsApp. Estado `menuOpen` boolean.
- **Scroll reveal**: secciones con `opacity:0; transform:translateY(16px)` que animan a `opacity:1; transform:translateY(0)` vía `IntersectionObserver` (threshold 0.12) cuando entran en viewport; con `setTimeout` de 1.5s como fallback para forzar visibilidad si el observer no dispara.
- **FAQ acordeón** (Contacto): un solo item abierto a la vez, signo `+`/`−`.
- **Formulario de contacto**: al enviar, construye un `mailto:` con subject/body desde los campos y navega a él; muestra un mensaje de confirmación.
- **Botón flotante WhatsApp**: `position: fixed; bottom/right: 22px`, `border-radius: 50%`, animación `waPulse` (box-shadow pulsante) infinita en todas las páginas.
- **Hover states**: botones (`.btn-primary` outline con tinte de fondo al hover), cards (elevación con `box-shadow`), links (color de texto → acento).
- **Mobile-first**: todo el layout usa flex/grid con `repeat(auto-fit, minmax(...))` y `clamp()` para tipografía — no hay media queries; el diseño es fluido en todos los anchos.

## State Management
- `menuOpen: boolean` — todas las páginas.
- `openIndex: number|null` — FAQ acordeón (contacto).
- `form: { name, company, email, message, sent }` — formulario de contacto.
- Sin fetching de datos remoto; todo el contenido está hardcodeado en cada página (arrays de proyectos, servicios, pasos, FAQs).

## Design Tokens (Nocturne)
Ver `design-system/styles.css` y `design-system/nocturne-readme.md` para el detalle completo. Resumen:

- **Color de fondo**: `#161826`
- **Superficie (cards)**: `#232532`
- **Texto**: `#e9e9ed` (usar con opacidad reducida vía `color-mix` para texto secundario: 85%/78%/72%/65%/55%/40%)
- **Acento (único)**: `#9184d9` — ramp completo 100–900 en `styles.css`; usar `#2b2741` (accent-900) como fondo de tag tintado y `#d2cefd` (accent-300) como texto sobre ese tinte.
- **Divisor**: `rgba(233,233,237,0.14–0.16)`
- **Tipografía**: Inter (heading/body, peso 500 en headings), JetBrains Mono (kickers, tags técnicos, código, labels — añadido sobre el DS base)
- **Radios**: sm 4px, md 8px, lg 14px
- **Sombras**: `--shadow-sm/md/lg` definidas en el DS (borde + oscuridad ambiental, sin drop-shadows pesados)
- **Glass**: `background: color-mix(in srgb, var(--color-surface|bg) 55–88%, transparent); backdrop-filter: blur(10px); border: 1px solid color-mix(in srgb, var(--color-text) 10–12%, transparent)`

## Assets
Todas en `assets/`:
- `hero-main.jpg` — imagen principal del hero de Home (data center con overlay de arquitectura de software)
- `erp-dashboard.jpg` — hero del caso de estudio "Inventario" + thumbnail de proyecto
- `server-room.jpg` — hero del caso de estudio "Portal"
- `network-security.jpg` — hero del caso de estudio "Plataforma"
- `code-workspace.jpg` — foto en Sobre mí
- `desk-setup.jpg`, `server-rack.jpg`, `db-schema.jpg` — usadas en Servicios (banner) y Contacto (imagen de arquitectura)

Los iconos son SVG inline (Phosphor-style, trazo/fill `currentColor`) embebidos directamente en cada página — cópialos del HTML o reemplázalos por tu librería de iconos preferida.

## Files
- `pages/*.dc.html` — las 8 páginas del sitio, HTML autocontenido y abrible directo en el navegador.
- `design-system/styles.css` — hoja de tokens y clases del sistema Nocturne (usada para `.nav`, `.btn`, `.card`, `.tag`, `.field`/`.input`, `.table`).
- `design-system/nocturne-readme.md` — guía de uso del sistema de diseño.
- `assets/` — imágenes reales usadas en el sitio.

## Contacto real (ya está en el diseño, no es placeholder)
- WhatsApp: +52 811 778 8448 (`https://wa.me/528117788448`)
- Nombre: Ing. Jassiel Zamarrón
- Correo mostrado: contacto@zadesarrollo.com — **confirmar si este correo es real antes de publicar**, o reemplazarlo por el que uses.
