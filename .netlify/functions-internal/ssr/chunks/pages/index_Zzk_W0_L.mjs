/* empty css                            */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, k as renderSlot, i as renderComponent } from '../astro_cMhD-XD7.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { a as $$Image, $ as $$Layout } from './AboutMe_f5Czg4j4.mjs';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Badge;
  return renderTemplate`${maybeRenderHead()}<span class="text-xs font-medium me-2 px-2.5 py-0.5  rounded bg-blue-600 text-white dark:bg-blue-900 dark:text-blue-300 mb-6"> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/components/Badge.astro", void 0);

const myself2 = new Proxy({"src":"/_astro/myself2.2k3GFYdX.jpg","width":320,"height":320,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Portafolio ViLoDev";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": myself2, "alt": "myself2", "class": "myself2", "data-astro-cid-j7pv25f6": true })} <section class="section" data-astro-cid-j7pv25f6> <h1 class="h1" data-astro-cid-j7pv25f6>Hola, soy Vicente Lozano Hervás <a href="https://www.linkedin.com/in/vicent-lozano-hervas-9bb498187?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACwINJ8B9u2AnoPr-2fvxh0bW4IXmKY5AaY&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BiC1uyoWlQJe6LN2gPgmk%2Bw%3D%3D" target="_blank" class="a" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Badge", $$Badge, { "class": "badge", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`<p class="badgeText" data-astro-cid-j7pv25f6>Disponible para trabajar</p>` })}</a></h1> <p data-astro-cid-j7pv25f6>Estudio Desarrollo de Aplicaciones Web en el IES Jaume II el Just, en Tavernes, Valencia.</p> <p data-astro-cid-j7pv25f6>Me encanta el mundo de la programación y la tecnología y me gustaría poder dedicarme a ello en un futuro.</p> <p data-astro-cid-j7pv25f6>Actualmente estoy aprendiendo Html, CSS Javascript, React y Astro, y me gustaría aprender Swift y Kotlin.</p> </section> </main> ` })} `;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
