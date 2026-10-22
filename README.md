# Ron’s Construction — WebDevPro Ultra Max 6 Rebrand

Construction company website, responsive and multi-page via client-side routing, including an animated 3-slide hero, typewriter titles, reveal transitions, interactive 3D flip service cards, gallery filters/lightbox, mobile menu, WhatsApp lead form, contact page, FAQ, and PWA assets.

## Client data
- Brand: Ron's Construction
- Website: www.ronsconstruction.co.za
- Email: info@ronsconstruction.co.za
- Call and WhatsApp: +27 83 320 4202

## Original client project photographs

The website serves **19 actual Ron’s Construction photos** plus the official logo, stored in `/media/`. The new building, blockwork, bathroom, roofing, paving, outdoor braai, ceilings, walls and property finishing images were selected directly from the photos supplied by the client in ChatGPT.

- Hero 1 intentionally keeps the original editorial construction photograph at the client's request.
- Hero 2: `media/modern-double-storey.webp`
- Hero 3: `media/bathroom-luxury.webp`
- Every service card, project section, gallery thumbnail, about photo and inner-page background uses local project media.
- Site brand in navigation and footer: `media/rons-logo.webp`
- Images are optimized as WebP and deployed with the site, not linked to third-party image hosts.
- Gallery contains 19 original project photos and matching factual category captions.

## Deployment
Vercel serves index.html using vercel.json SPA rewrites. No package installation or build required. Keep robots.txt noindex until the domain is active and actual media is uploaded. PWA service worker and site metadata are unique to Ron's Construction.

Website designed by WebDevPro. https://webdevpro.co.za
