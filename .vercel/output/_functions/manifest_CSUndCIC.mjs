import { p as decodeKey } from './chunks/astro/server_MuBBtQ0k.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CZGNW2oa.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
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
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Usuario/Documents/proyectos%20Backend/mi-portafolio/","cacheDir":"file:///C:/Users/Usuario/Documents/proyectos%20Backend/mi-portafolio/node_modules/.astro/","outDir":"file:///C:/Users/Usuario/Documents/proyectos%20Backend/mi-portafolio/dist/","srcDir":"file:///C:/Users/Usuario/Documents/proyectos%20Backend/mi-portafolio/src/","publicDir":"file:///C:/Users/Usuario/Documents/proyectos%20Backend/mi-portafolio/public/","buildClientDir":"file:///C:/Users/Usuario/Documents/proyectos%20Backend/mi-portafolio/dist/client/","buildServerDir":"file:///C:/Users/Usuario/Documents/proyectos%20Backend/mi-portafolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.13.5_@types+node@16_0bfe1bb8296e202a0b2619ccb94ed335/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DKS9Byf1.css"},{"type":"inline","content":"@keyframes gradient-x{0%,to{background-size:200% 200%;background-position:left center}50%{background-size:200% 200%;background-position:right center}}@keyframes fade-in{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left{0%{opacity:0;transform:translate(-50px)}to{opacity:1;transform:translate(0)}}@keyframes slide-in-right{0%{opacity:0;transform:translate(50px)}to{opacity:1;transform:translate(0)}}@keyframes particle-float{0%{transform:translateY(100vh) translate(0) rotate(0);opacity:0}10%{opacity:1}90%{opacity:1}to{transform:translateY(-100vh) translate(100px) rotate(360deg);opacity:0}}.animate-gradient-x[data-astro-cid-uw5kdbxl]{background-size:200% 200%;animation:gradient-x 3s ease infinite}.animate-fade-in[data-astro-cid-uw5kdbxl]{animation:fade-in 1s ease-out}.animate-slide-in-left[data-astro-cid-uw5kdbxl]{animation:slide-in-left .8s ease-out}.animate-slide-in-right[data-astro-cid-uw5kdbxl]{animation:slide-in-right .8s ease-out .2s both}.floating-particles[data-astro-cid-uw5kdbxl]{position:absolute;width:100%;height:100%;overflow:hidden;pointer-events:none}.floating-particles[data-astro-cid-uw5kdbxl]:before,.floating-particles[data-astro-cid-uw5kdbxl]:after{content:\"\";position:absolute;width:4px;height:4px;background:linear-gradient(45deg,#6b7280,#9ca3af);border-radius:50%;animation:particle-float 15s linear infinite}.floating-particles[data-astro-cid-uw5kdbxl]:before{top:20%;left:20%;animation-delay:-5s}.floating-particles[data-astro-cid-uw5kdbxl]:after{top:60%;left:80%;animation-delay:-10s}.form-group[data-astro-cid-uw5kdbxl]:focus-within .input-glow[data-astro-cid-uw5kdbxl]{opacity:1}.contact-form[data-astro-cid-uw5kdbxl] input[data-astro-cid-uw5kdbxl]:focus,.contact-form[data-astro-cid-uw5kdbxl] textarea[data-astro-cid-uw5kdbxl]:focus,.contact-form[data-astro-cid-uw5kdbxl] select[data-astro-cid-uw5kdbxl]:focus{transform:translateY(-2px);box-shadow:0 10px 25px #6b728033}.submit-btn[data-astro-cid-uw5kdbxl]:hover{box-shadow:0 15px 35px #6b72804d}.contact-item[data-astro-cid-uw5kdbxl]:hover{transform:translate(5px)}.social-link[data-astro-cid-uw5kdbxl]:hover{box-shadow:0 10px 25px #6b728033}@media (max-width: 768px){.animate-slide-in-left[data-astro-cid-uw5kdbxl],.animate-slide-in-right[data-astro-cid-uw5kdbxl]{animation:fade-in .8s ease-out}}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Usuario/Documents/proyectos Backend/mi-portafolio/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/Usuario/Documents/proyectos Backend/mi-portafolio/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/Usuario/Documents/proyectos Backend/mi-portafolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Usuario/Documents/proyectos Backend/mi-portafolio/src/pages/projects.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.13.5_@types+node@16_0bfe1bb8296e202a0b2619ccb94ed335/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CSUndCIC.mjs","C:/Users/Usuario/Documents/proyectos Backend/mi-portafolio/node_modules/.pnpm/astro@5.13.5_@types+node@16_0bfe1bb8296e202a0b2619ccb94ed335/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_ChcxJBeD.mjs","@astrojs/react/client.js":"_astro/client.DL-_0xdV.js","C:/Users/Usuario/Documents/proyectos Backend/mi-portafolio/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.DFgLxQPA.js","C:/Users/Usuario/Documents/proyectos Backend/mi-portafolio/src/pages/projects.astro?astro&type=script&index=0&lang.ts":"_astro/projects.astro_astro_type_script_index_0_lang.EtFuWuCo.js","C:/Users/Usuario/Documents/proyectos Backend/mi-portafolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.Dt1DL8f9.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Usuario/Documents/proyectos Backend/mi-portafolio/src/pages/contact.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const r=document.getElementById(\"contactForm\"),o=r.querySelector(\".submit-btn\"),i={threshold:.1,rootMargin:\"0px 0px -50px 0px\"},l=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&n.target.classList.add(\"animate-fade-in\")})},i);document.querySelectorAll(\".contact-item, .social-link\").forEach(e=>{l.observe(e)}),r.addEventListener(\"submit\",async function(e){e.preventDefault();const n=o.innerHTML;o.innerHTML=`\n        <span class=\"flex items-center justify-center\">\n          <svg class=\"animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\">\n            <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\"></circle>\n            <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"></path>\n          </svg>\n          Enviando...\n        </span>\n      `,o.disabled=!0;try{const t=new FormData(r),a={name:t.get(\"name\"),email:t.get(\"email\"),subject:t.get(\"subject\"),message:t.get(\"message\")},c=await(await fetch(\"/api/contact\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(a)})).json();c.success?(s(\"¡Mensaje enviado correctamente! Te responderé pronto.\",\"success\"),r.reset()):s(c.error||\"Error al enviar el mensaje. Inténtalo de nuevo.\",\"error\")}catch(t){console.error(\"Error:\",t),s(\"Error de conexión. Verifica tu internet e inténtalo de nuevo.\",\"error\")}o.innerHTML=n,o.disabled=!1});function d(){const e=document.createElement(\"div\");e.className=\"absolute w-1 h-1 bg-gray-400 rounded-full opacity-70\",e.style.left=Math.random()*100+\"%\",e.style.top=\"100%\",e.style.animation=`particle-float ${15+Math.random()*10}s linear infinite`;const n=document.querySelector(\".floating-particles\");n&&(n.appendChild(e),setTimeout(()=>{e.remove()},25e3))}setInterval(d,3e3);function s(e,n){const t=document.createElement(\"div\"),a=n===\"success\"?\"bg-green-500\":\"bg-red-500\";t.className=`fixed top-4 right-4 ${a} text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in`,t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.remove()},5e3)}});"],["C:/Users/Usuario/Documents/proyectos Backend/mi-portafolio/src/pages/projects.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const r=document.querySelectorAll(\".project-card\"),n={threshold:.1,rootMargin:\"0px 0px -50px 0px\"},o=new IntersectionObserver(e=>{e.forEach((t,s)=>{t.isIntersecting&&(setTimeout(()=>{t.target.classList.add(\"animate-fadeInUp\")},s*150),o.unobserve(t.target))})},n);r.forEach(e=>{o.observe(e)})});"],["C:/Users/Usuario/Documents/proyectos Backend/mi-portafolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const n=document.getElementById(\"mobile-menu-button\"),e=document.getElementById(\"mobile-menu\"),o=document.getElementById(\"hamburger-icon\"),d=document.getElementById(\"close-icon\");if(!n||!e||!o||!d){console.warn(\"Elementos del menú móvil no encontrados. Funcionalidad deshabilitada.\");return}let i=!1;function s(){i=!i,n&&n.setAttribute(\"aria-expanded\",i.toString()),i?(e&&(e.classList.remove(\"hidden\"),e.style.maxHeight=e.scrollHeight+\"px\"),o&&o.classList.add(\"hidden\"),d&&d.classList.remove(\"hidden\"),n&&n.setAttribute(\"aria-label\",\"Cerrar menú de navegación\")):(e&&(e.style.maxHeight=\"0\",setTimeout(()=>{e&&e.classList.add(\"hidden\")},300)),o&&o.classList.remove(\"hidden\"),d&&d.classList.add(\"hidden\"),n&&n.setAttribute(\"aria-label\",\"Abrir menú de navegación\"))}if(n&&n.addEventListener(\"click\",function(t){t.preventDefault(),s()}),e){const t=e.querySelectorAll(\"a\");t&&t.length>0&&t.forEach(c=>{c&&c.addEventListener(\"click\",function(){i&&s()})})}document.addEventListener(\"keydown\",function(t){t.key===\"Escape\"&&i&&s()}),document.addEventListener(\"click\",function(t){i&&e&&n&&!e.contains(t.target)&&!n.contains(t.target)&&s()});let a;window.addEventListener(\"resize\",function(){clearTimeout(a),a=window.setTimeout(function(){window.innerWidth>=768&&i&&s()},250)})});"]],"assets":["/_astro/about.DKS9Byf1.css","/animacion.gif","/astro.svg","/background.svg","/ecommerce1.jpg","/ecommerce2.jpg","/ecommerce3.jpg","/erp.jpg","/favicon.svg","/Java_Horas libres.jpg","/juego python.jpg","/landingpage.jpg","/logo.svg","/logoTIKNO.jpg","/manifest.json","/mindfulnes 1.jpg","/mindfulnes 2.jpg","/mindfulnes 3.jpg","/Perfil.jpg","/perfil1.jpg","/Portafolio.jpg","/PythonMentor.jpg","/Tikno.jpg","/_astro/client.DL-_0xdV.js","/about/index.html","/projects/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"C8kAMh0WVw3edE7kiKR9RgTzCSUnCcOYa5KpPn+f0VM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
