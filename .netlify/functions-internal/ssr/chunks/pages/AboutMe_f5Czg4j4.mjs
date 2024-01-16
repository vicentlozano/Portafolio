/* empty css                            */
import 'html-escaper';
import { A as AstroError, c as InvalidImageService, d as ExpectedImageOptions, E as ExpectedImage, e as createAstro, f as createComponent, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderComponent, j as renderHead, k as renderSlot } from '../astro_cMhD-XD7.mjs';
import 'kleur/colors';
import 'clsx';
import { i as isESMImportedImage, a as isLocalService, b as isRemoteImage, D as DEFAULT_HASH_PROPS } from '../astro/assets-service_5Xdc9nP9.mjs';
/* empty css                            */

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../astro/assets-service_5Xdc9nP9.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$c = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/node_modules/astro/components/Image.astro", void 0);

const $$Astro$b = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$a = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Navigation;
  const pathToNumber = {
    "/": "c1",
    "/Experience": "c2",
    "/Projects": "c3",
    "/Contact": "c4",
    "/AboutMe": "c5"
  };
  const url = new URL(Astro2.request.url);
  const currentPath = url.pathname;
  const currentClass = pathToNumber[currentPath] || "";
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center gap-x-6 opacity-80 mt-4 mb-16 navegador-principal" data-astro-cid-pux6a34n> <a href="/"${addAttribute(`c1 ${currentClass === "c1" ? "active" : ""}`, "class")} data-astro-cid-pux6a34n>Inicio</a> <a href="/Experience"${addAttribute(`c2 ${currentClass === "c2" ? "active" : ""}`, "class")} data-astro-cid-pux6a34n>Experiencia</a> <a href="/Projects"${addAttribute(`c3 ${currentClass === "c3" ? "active" : ""}`, "class")} data-astro-cid-pux6a34n>Proyectos</a> <a href="/Contact"${addAttribute(`c4 ${currentClass === "c4" ? "active" : ""}`, "class")} data-astro-cid-pux6a34n>Contacto</a> <a href="/AboutMe"${addAttribute(`c5 ${currentClass === "c5" ? "active" : ""}`, "class")} data-astro-cid-pux6a34n>Sobre Mi</a> </div> `;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/components/Navigation.astro", void 0);

const $$Astro$9 = createAstro();
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/components/Hamburger.astro", void 0);

const $$Astro$8 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<nav> ${renderComponent($$result, "Hamburger", $$Hamburger, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav>`;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/components/Header.astro", void 0);

const $$Astro$7 = createAstro();
const $$Github = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/components/Icons/Github.astro", void 0);

const $$Astro$6 = createAstro();
const $$Xtwitter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Xtwitter;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>`;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/components/Icons/x(twitter).astro", void 0);

const $$Astro$5 = createAstro();
const $$Instagram = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M16.5 7.5l0 .01"></path></svg>`;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/components/Icons/Instagram.astro", void 0);

const $$Astro$4 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<section class="footer" data-astro-cid-sz7xmlte> <a href="https://www.instagram.com/vicentlozano94" class="text-white" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Instagram", $$Instagram, { "class": "w-8 h-8 md:w-12 md:h-12", "data-astro-cid-sz7xmlte": true })} </a> <a href="https://www.twitter.com/vicentlozano94" class="text-white" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Twitter", $$Xtwitter, { "class": "w-8 h-8 md:w-12 md:h-12", "data-astro-cid-sz7xmlte": true })} </a> <a href="https://github.com/vicentlozano" class="text-white" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Github", $$Github, { "class": "w-8 h-8 md:w-12 md:h-12", "data-astro-cid-sz7xmlte": true })} </a> </section> `;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="absolute top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] 100vh"> <div class="content"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/layouts/Layout.astro", void 0);

const rhtml5 = new Proxy({"src":"/_astro/html5.nyZ_1BLR.png","width":1600,"height":1816,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const rpython = new Proxy({"src":"/_astro/python.rP_NUFn5.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const rastro = new Proxy({"src":"/_astro/astro.MI57JGMm.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const rnode = new Proxy({"src":"/_astro/nodeJS.KUGr2PfQ.png","width":300,"height":278,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const rjs = new Proxy({"src":"/_astro/javascript.kEV7m7Th.png","width":800,"height":1129,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const rcss = new Proxy({"src":"/_astro/css3.cgyRd16g.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const hubgit = new Proxy({"src":"/_astro/Giticon.BsYEddLA.png","width":383,"height":383,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Habilidades = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Habilidades;
  return renderTemplate`${maybeRenderHead()}<container class="container" data-astro-cid-3z7yjlti> <h1 data-astro-cid-3z7yjlti>Mis habilidades</h1> <div class="skills" data-astro-cid-3z7yjlti> <div class="topic" data-astro-cid-3z7yjlti> ${renderComponent($$result, "Image", $$Image, { "class": "imagenpe", "src": rhtml5, "alt": "icono de html", "data-astro-cid-3z7yjlti": true })} <h4 data-astro-cid-3z7yjlti>HTML</h4> </div> <div class="topic" data-astro-cid-3z7yjlti> ${renderComponent($$result, "Image", $$Image, { "class": "imagenpe", "src": rcss, "alt": "icono de html", "data-astro-cid-3z7yjlti": true })} <h4 data-astro-cid-3z7yjlti>CSS</h4> </div> <div class="topic" data-astro-cid-3z7yjlti> ${renderComponent($$result, "Image", $$Image, { "class": "imagenpe", "src": rjs, "alt": "icono de html", "data-astro-cid-3z7yjlti": true })} <h4 data-astro-cid-3z7yjlti>JavaScript</h4> </div> <div class="topic" data-astro-cid-3z7yjlti> ${renderComponent($$result, "Image", $$Image, { "class": "imagenpe", "src": rpython, "alt": "icono de html", "data-astro-cid-3z7yjlti": true })} <h4 data-astro-cid-3z7yjlti>Python</h4> </div> <div class="topic" data-astro-cid-3z7yjlti> ${renderComponent($$result, "Image", $$Image, { "class": "imagenpe", "src": rastro, "alt": "icono de html", "data-astro-cid-3z7yjlti": true })} <h4 data-astro-cid-3z7yjlti>Astro</h4> </div> <div class="topic" data-astro-cid-3z7yjlti> ${renderComponent($$result, "Image", $$Image, { "class": "imagenpe", "src": rnode, "alt": "icono de html", "data-astro-cid-3z7yjlti": true })} <h4 data-astro-cid-3z7yjlti>Node.js</h4> </div> <div class="topic" data-astro-cid-3z7yjlti> ${renderComponent($$result, "Image", $$Image, { "class": "imagenpe", "src": hubgit, "alt": "icono de html", "data-astro-cid-3z7yjlti": true })} <h4 data-astro-cid-3z7yjlti>GIT</h4> </div> </div> </container> `;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/components/Habilidades.astro", void 0);

const $$Astro = createAstro();
const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const title = "Sobre Mi";
  const identity = {
    name: "Vicent Lozano",
    location: "Valencia, Espa\xF1a",
    role: "Desarrollador web",
    hobbies: ["leer", "escuchar m\xFAsica", "ver series", "pescar"]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "data-astro-cid-y3hbxyyn": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="contenido" data-astro-cid-y3hbxyyn> <section class="containergrid-6" data-astro-cid-y3hbxyyn> <p class="definition" data-astro-cid-y3hbxyyn>Me llamo ${identity.name}, soy de ${identity.location}.</p> <p class="definition" data-astro-cid-y3hbxyyn>Soy un desarrollador web que le encanta aprender cosas nuevas y que le apasiona la tecnología.</p> <p class="definition" data-astro-cid-y3hbxyyn>Me gusta mucho el mundo de la programación</p> <p class="definition" data-astro-cid-y3hbxyyn>Me considero una persona muy curiosa y autodidacta.</p> <p class="definition" data-astro-cid-y3hbxyyn>Mis aficiones son: ${identity.hobbies[0]}, ${identity.hobbies[1]}, ${identity.hobbies[2]}, ${identity.hobbies[3]}.</p> </section> <article class="habilidades" data-astro-cid-y3hbxyyn> ${renderComponent($$result2, "Habilidades", $$Habilidades, { "data-astro-cid-y3hbxyyn": true })} </article> </main> ` })} `;
}, "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/pages/AboutMe.astro", void 0);

const $$file = "C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/pages/AboutMe.astro";
const $$url = "/AboutMe";

const AboutMe = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AboutMe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, AboutMe as A, $$Image as a, getConfiguredImageService as g, imageConfig as i };
