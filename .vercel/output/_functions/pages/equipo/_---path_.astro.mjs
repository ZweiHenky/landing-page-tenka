import { f as createComponent, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_B4d5C15w.mjs';
import 'piccolore';
import { $ as $$SharedAppLinkPage } from '../../chunks/SharedAppLinkPage_Vo7-f5JT.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SharedAppLinkPage", $$SharedAppLinkPage, { "kind": "equipo" })}`;
}, "C:/Users/ronaldo/Documents/myleague/landing/src/pages/equipo/[...path].astro", void 0);

const $$file = "C:/Users/ronaldo/Documents/myleague/landing/src/pages/equipo/[...path].astro";
const $$url = "/equipo/[...path]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
