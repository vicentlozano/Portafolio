import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_cMhD-XD7.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.-OpaiJNX.js"}],"styles":[{"type":"external","src":"/_astro/AboutMe.jhuJIq3C.css"},{"type":"inline","content":"h1[data-astro-cid-j7pv25f6]{color:#e3e8f3;font-size:1.875rem;font-weight:700;display:flex;align-items:center;gap:1rem;padding-bottom:1.5rem}.a[data-astro-cid-j7pv25f6]{display:flex;justify-content:center;align-items:center}.section[data-astro-cid-j7pv25f6]{margin:3rem;display:flex;flex-direction:column;align-items:flex-start;border:3px solid slategray;border-radius:10px;padding:1rem}main[data-astro-cid-j7pv25f6]{display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:10px;margin-bottom:10px}p[data-astro-cid-j7pv25f6]{font-size:1.3rem;margin-top:.9rem}.badgeText[data-astro-cid-j7pv25f6]{text-align:center;margin:.1rem}badge[data-astro-cid-j7pv25f6]{margin-bottom:2rem}@media (min-width: 1024px){.myself2[data-astro-cid-j7pv25f6]{border-radius:50%;width:10rem;height:10rem;justify-content:center;margin-top:1rem}.h1[data-astro-cid-j7pv25f6]{font-size:2rem;font-weight:700;justify-content:center;align-items:center}.a[data-astro-cid-j7pv25f6]{margin-top:2rem}p[data-astro-cid-j7pv25f6]{font-size:1rem;margin-top:.5rem}}@media (max-width: 1024px){.myself2[data-astro-cid-j7pv25f6]{border-radius:50%;width:8rem;height:8rem;justify-content:center;margin-top:3rem}.h1[data-astro-cid-j7pv25f6]{font-size:1.4rem;font-weight:700;justify-content:center;align-items:center}.a[data-astro-cid-j7pv25f6]{margin-top:2rem}p[data-astro-cid-j7pv25f6]{font-size:.7rem;margin-top:.4rem}}@media (max-width: 768px){.h1[data-astro-cid-j7pv25f6]{font-size:1rem}.a[data-astro-cid-j7pv25f6]{margin-top:1.5rem}.myself2[data-astro-cid-j7pv25f6]{width:6rem;height:6rem;border-radius:50%;margin-top:1.8rem}p[data-astro-cid-j7pv25f6]{font-size:.7rem;margin-top:.3rem}}@media (max-width: 600px){.h1[data-astro-cid-j7pv25f6]{font-size:.9rem}.a[data-astro-cid-j7pv25f6]{margin-top:1.5rem}.myself2[data-astro-cid-j7pv25f6]{width:4rem;height:4rem;border-radius:50%;margin-top:1rem}p[data-astro-cid-j7pv25f6]{font-size:.6rem;margin-top:.1rem}}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.-OpaiJNX.js"}],"styles":[{"type":"external","src":"/_astro/AboutMe.jhuJIq3C.css"},{"type":"inline","content":".section_Experience[data-astro-cid-5aytf23l]{display:flex;flex-direction:column;align-items:center;padding:3rem}@media (min-width: 768px){.section_Experience[data-astro-cid-5aytf23l]{padding:5rem}}@media (min-width: 1024px){.section_Experience[data-astro-cid-5aytf23l]{padding:10rem}}\n"}],"routeData":{"route":"/experience","type":"page","pattern":"^\\/Experience\\/?$","segments":[[{"content":"Experience","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Experience.astro","pathname":"/Experience","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.-OpaiJNX.js"}],"styles":[{"type":"external","src":"/_astro/AboutMe.jhuJIq3C.css"}],"routeData":{"route":"/projects","type":"page","pattern":"^\\/Projects\\/?$","segments":[[{"content":"Projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Projects.astro","pathname":"/Projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.-OpaiJNX.js"}],"styles":[{"type":"external","src":"/_astro/AboutMe.jhuJIq3C.css"},{"type":"inline","content":".imagenpe[data-astro-cid-3z7yjlti]{width:43px;height:30px;padding-right:8px;padding-left:7px}.skills[data-astro-cid-3z7yjlti]{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));height:100%;width:100%;gap:20px;justify-content:center;place-items:center}.topic[data-astro-cid-3z7yjlti]{display:flex;align-content:center;align-items:center;transition-property:color}h4[data-astro-cid-3z7yjlti]{font-size:1.2rem;font-weight:700;letter-spacing:.1rem;opacity:90%;padding-right:7px}.topic[data-astro-cid-3z7yjlti]:hover{color:#008cff;transition-duration:.5s}h1[data-astro-cid-3z7yjlti]{letter-spacing:.2rem;font-size:1.5rem;font-weight:700;opacity:90%;margin-bottom:3rem;margin-top:9rem;text-align:center}.definition[data-astro-cid-y3hbxyyn]:nth-of-type(1){animation-delay:1.5s}.definition[data-astro-cid-y3hbxyyn]:nth-of-type(2){animation-delay:1s}.definition[data-astro-cid-y3hbxyyn]:nth-of-type(3){animation-delay:.3s}.definition[data-astro-cid-y3hbxyyn]:nth-of-type(4){animation-delay:1s}.definition[data-astro-cid-y3hbxyyn]:nth-of-type(5){animation-delay:1.5s}.containergrid-6[data-astro-cid-y3hbxyyn]{display:grid;grid-template-columns:repeat(auto-fill,minmax(236px,1fr));gap:30px;width:100%;justify-content:center;margin-top:100px;padding:30px}@keyframes fadeIn{to{opacity:1}}.definition[data-astro-cid-y3hbxyyn]{text-align:center;box-sizing:border-box;transition-property:transform,background,box-shadow;opacity:0;animation:fadeIn 1s forwards;padding:10px;border-radius:10px;border:1px solid gray}.definition[data-astro-cid-y3hbxyyn]:hover{background:opacity(.5);box-shadow:0 0 10px #214490}@media (max-width:1380px){.definition[data-astro-cid-y3hbxyyn]:nth-of-type(1){animation-delay:.4s}.definition[data-astro-cid-y3hbxyyn]:nth-of-type(2){animation-delay:.7s}.definition[data-astro-cid-y3hbxyyn]:nth-of-type(3){animation-delay:1s}.definition[data-astro-cid-y3hbxyyn]:nth-of-type(4){animation-delay:1.4s}.definition[data-astro-cid-y3hbxyyn]:nth-of-type(5){animation-delay:1.7s}}\n"}],"routeData":{"route":"/aboutme","type":"page","pattern":"^\\/AboutMe\\/?$","segments":[[{"content":"AboutMe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/AboutMe.astro","pathname":"/AboutMe","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.-OpaiJNX.js"}],"styles":[{"type":"external","src":"/_astro/AboutMe.jhuJIq3C.css"},{"type":"inline","content":".flecha[data-astro-cid-3tswsiq2]{color:#008cff;animation:desplazarHaciaAbajo 1.4s ease-in}@keyframes desplazarHaciaAbajo{0%{transform:translateY(-110%)}to{transform:translateY(0)}}.cuadricula[data-astro-cid-dbkjkekj]{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr);grid-template-areas:\"instagram email linkedin\" \"twitter email whatsapp\";gap:2rem;justify-items:center;align-items:center;max-height:300px}.cuadricula[data-astro-cid-dbkjkekj] a[data-astro-cid-dbkjkekj]{height:130px;width:130px}.instagram[data-astro-cid-dbkjkekj]{grid-area:instagram;color:#e1306c}.twitter[data-astro-cid-dbkjkekj]{grid-area:twitter;color:#1da1f2}.linkedin[data-astro-cid-dbkjkekj]{grid-area:linkedin;color:#0077b5}.whatsapp[data-astro-cid-dbkjkekj]{grid-area:whatsapp;color:#25d366}.email[data-astro-cid-dbkjkekj]{grid-area:email;color:#d44638}.instagram[data-astro-cid-dbkjkekj],.twitter[data-astro-cid-dbkjkekj],.linkedin[data-astro-cid-dbkjkekj],.whatsapp[data-astro-cid-dbkjkekj],.email[data-astro-cid-dbkjkekj]{background-size:contain}@media (max-width:768px){.cuadricula[data-astro-cid-dbkjkekj]{max-width:90%vw}.cuadricula[data-astro-cid-dbkjkekj] a[data-astro-cid-dbkjkekj]{width:80%;height:auto}}h2[data-astro-cid-6klqy6yr]{font-size:1.4rem;font-weight:700;text-align:center;opacity:.8;text-wrap:balance;margin-left:3rem;margin-right:3rem}\n"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/Contact\\/?$","segments":[[{"content":"Contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Contact.astro","pathname":"/Contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/pages/AboutMe.astro",{"propagation":"none","containsHead":true}],["C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/pages/Contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/pages/Experience.astro",{"propagation":"none","containsHead":true}],["C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/pages/Projects.astro",{"propagation":"none","containsHead":true}],["C:/Users/lozan/OneDrive/Documentos/JavaScript/Portafolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/Contact.astro":"chunks/pages/Contact_Q-M6tbLu.mjs","/src/pages/Experience.astro":"chunks/pages/Experience_zRnsmfRX.mjs","/src/pages/Projects.astro":"chunks/pages/Projects_bnN1M0Pg.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_NnLOMBL8.mjs","/src/pages/index.astro":"chunks/pages/index_Zzk_W0_L.mjs","\u0000@astrojs-manifest":"manifest_Pi5uoSf1.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_MtJZFDDk.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_gWjZqPcd.mjs","\u0000@astro-page:src/pages/Experience@_@astro":"chunks/Experience_Y8bqm-XU.mjs","\u0000@astro-page:src/pages/Projects@_@astro":"chunks/Projects_ezsdrwq2.mjs","\u0000@astro-page:src/pages/AboutMe@_@astro":"chunks/AboutMe_0IDNjaCO.mjs","\u0000@astro-page:src/pages/Contact@_@astro":"chunks/Contact_9HAzAlV0.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.-OpaiJNX.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/myself2.2k3GFYdX.jpg","/_astro/onest-cyrillic-wght-normal.okE7jKFK.woff2","/_astro/onest-latin-ext-wght-normal.NATBPiDw.woff2","/_astro/onest-latin-wght-normal.ycwkluYs.woff2","/_astro/html5.nyZ_1BLR.png","/_astro/astro.MI57JGMm.png","/_astro/python.rP_NUFn5.png","/_astro/javascript.kEV7m7Th.png","/_astro/Giticon.BsYEddLA.png","/_astro/nodeJS.KUGr2PfQ.png","/_astro/css3.cgyRd16g.png","/_astro/AboutMe.jhuJIq3C.css","/favicon.svg","/_astro/hoisted.-OpaiJNX.js"]});

export { manifest };
