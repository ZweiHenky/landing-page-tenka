import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CM2S6BRk.mjs';
import { manifest } from './manifest_Bs3hM7do.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/arbitro.astro.mjs');
const _page3 = () => import('./pages/assetlinks.json.astro.mjs');
const _page4 = () => import('./pages/aviso-de-privacidad.astro.mjs');
const _page5 = () => import('./pages/contacto.astro.mjs');
const _page6 = () => import('./pages/equipo.astro.mjs');
const _page7 = () => import('./pages/equipo/_---path_.astro.mjs');
const _page8 = () => import('./pages/liga.astro.mjs');
const _page9 = () => import('./pages/liga/_---path_.astro.mjs');
const _page10 = () => import('./pages/terminos-y-condiciones.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/arbitro.astro", _page2],
    ["src/pages/assetlinks.json.ts", _page3],
    ["src/pages/aviso-de-privacidad.astro", _page4],
    ["src/pages/contacto.astro", _page5],
    ["src/pages/equipo/index.astro", _page6],
    ["src/pages/equipo/[...path].astro", _page7],
    ["src/pages/liga/index.astro", _page8],
    ["src/pages/liga/[...path].astro", _page9],
    ["src/pages/terminos-y-condiciones.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "71166dd7-640f-4e95-9031-efd550741500",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
