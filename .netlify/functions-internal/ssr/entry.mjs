import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Pi5uoSf1.mjs';

const _page0  = () => import('./chunks/generic_MtJZFDDk.mjs');
const _page1  = () => import('./chunks/index_gWjZqPcd.mjs');
const _page2  = () => import('./chunks/Experience_Y8bqm-XU.mjs');
const _page3  = () => import('./chunks/Projects_ezsdrwq2.mjs');
const _page4  = () => import('./chunks/AboutMe_0IDNjaCO.mjs');
const _page5  = () => import('./chunks/Contact_9HAzAlV0.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/Experience.astro", _page2],["src/pages/Projects.astro", _page3],["src/pages/AboutMe.astro", _page4],["src/pages/Contact.astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
