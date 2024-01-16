/* empty css                            */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_cMhD-XD7.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './AboutMe_f5Czg4j4.mjs';

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const title = "Proyectos";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main></main> ` })}`;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/pages/Projects.astro", void 0);

const $$file = "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/pages/Projects.astro";
const $$url = "/Projects";

export { $$Projects as default, $$file as file, $$url as url };
