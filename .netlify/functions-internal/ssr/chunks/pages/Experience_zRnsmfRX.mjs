/* empty css                            */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from '../astro_cMhD-XD7.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './AboutMe_f5Czg4j4.mjs';
/* empty css                               */

const $$Astro$2 = createAstro();
const $$ExperienceItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, description, link, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">${date}</time> <h3 class="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mt-2"> ${title} </h3> <p class="mb-4 text-base font-normal  dark:text-gray-200 text-pretty"> ${description} </p> ${link && renderTemplate`<a${addAttribute(link, "href")} class="bg-white/5 
    border dark:border-white/10 border-gray-300
    rounded-full
    inline-flex justify-center items-center gap-x-2
    py-1 px-2 md:py-2 md:px-4
    text-xs md:text-base
    transition
    hover:scale-110 hover:bg-white/10">
Saber más...${" "} <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a>`}`;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/components/ExperienceItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$TimeLine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TimeLine;
  const EXPERIENCIE = [
    {
      date: "Actualmente...",
      title: "Estudiante de Desarrollo de Aplicaciones Web \u2212 IES Jaume II el Just",
      description: "Compagino mis estudios en el ciclo de Desarrollo de Aplicaciones Web con el trabajo en Ma\xF1ez y Lozano."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative border-s border-gray-200 ml-3"> ${EXPERIENCIE.map((experiencie) => renderTemplate`<li class="mb-10 ms-4"> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experiencie })} </li>`)} </ol>`;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/components/TimeLine.astro", void 0);

const $$Astro = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Experience;
  const title = "Experiencia";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "data-astro-cid-5aytf23l": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main" data-astro-cid-5aytf23l> <section class="section_Experience" data-astro-cid-5aytf23l> ${renderComponent($$result2, "TimeLine", $$TimeLine, { "data-astro-cid-5aytf23l": true })} </section> </main> ` })} `;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/pages/Experience.astro", void 0);

const $$file = "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/pages/Experience.astro";
const $$url = "/Experience";

export { $$Experience as default, $$file as file, $$url as url };
