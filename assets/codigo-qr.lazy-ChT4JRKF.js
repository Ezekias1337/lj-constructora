import{c as h,j as e,L as d}from"./index-DunFQ_gQ.js";const p=`
  .jbh-card-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background: var(--bg);
    color: var(--fg);
    font-family: var(--font-body);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .jbh-card {
    width: 100%;
    max-width: 400px;
    padding: 3rem 1.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .jbh-profile {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--surface);
    border: 2px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.75rem;
    flex-shrink: 0;
  }

  .jbh-profile svg {
    width: 2rem;
    height: 2rem;
    color: var(--muted);
  }

  .jbh-name {
    font-family: var(--font-display);
    font-size: 1.375rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2;
    display: flex;
    align-items: center;
    gap: 0.375rem;
    margin-bottom: 0.375rem;
  }

  .jbh-name .jbh-accent {
    color: var(--accent);
  }

  .jbh-badge {
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    color: var(--accent);
  }

  .jbh-tagline {
    font-size: 0.875rem;
    color: var(--muted);
    letter-spacing: 0.01em;
    margin-bottom: 2rem;
  }

  .jbh-pills {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .jbh-pill {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    width: 100%;
    min-height: 52px;
    padding: 0.625rem 1.25rem;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 0.9375rem;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.01em;
    transition: background 0.15s, transform 0.1s, color 0.15s, border-color 0.15s;
    -webkit-tap-highlight-color: transparent;
  }

  .jbh-pill:active {
    transform: scale(0.97);
  }

  .jbh-pill:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(253, 92, 0, 0.35);
  }

  .jbh-pill svg {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
  }

  /* Accent pill (WhatsApp) */
  .jbh-pill--accent {
    background: var(--accent);
    color: #000;
  }

  .jbh-pill--accent:hover {
    background: #e05200;
  }

  /* Surface pill (default) */
  .jbh-pill--surface {
    background: var(--surface);
    color: var(--fg);
  }

  .jbh-pill--surface:hover {
    background: #3a3a3a;
  }

  /* Ghost pill (secondary) */
  .jbh-pill--ghost {
    background: transparent;
    color: var(--muted);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .jbh-pill--ghost:hover {
    color: var(--fg);
    border-color: rgba(255, 255, 255, 0.25);
  }

  /* Social row */
  .jbh-social {
    display: flex;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .jbh-social-pill {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--surface);
    color: var(--muted);
    text-decoration: none;
    transition: color 0.15s, background 0.15s;
    -webkit-tap-highlight-color: transparent;
  }

  .jbh-social-pill:hover {
    color: var(--fg);
    background: #3a3a3a;
  }

  .jbh-social-pill:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(253, 92, 0, 0.35);
  }

  .jbh-social-pill svg {
    width: 1.125rem;
    height: 1.125rem;
  }

  /* Compact variant */
  @media (max-height: 680px) {
    .jbh-card {
      padding: 2rem 1.5rem 1.5rem;
    }
    .jbh-profile {
      width: 64px;
      height: 64px;
      margin-bottom: 0.5rem;
    }
    .jbh-profile svg {
      width: 1.5rem;
      height: 1.5rem;
    }
    .jbh-tagline {
      margin-bottom: 1.25rem;
    }
    .jbh-pills {
      gap: 0.5rem;
    }
  }
`;function m(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.8,stroke:"currentColor","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 10.5c0-3.866-3.134-7-7-7s-7 3.134-7 7c0 1.89.756 3.605 1.984 4.848L4 21l5.868-1.54A6.965 6.965 0 0 0 10 17.5c3.866 0 7-3.134 7-7Z"})})}function g(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.8,stroke:"currentColor","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"})})}function b(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.8,stroke:"currentColor","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.902l-7.5 4.275a2.25 2.25 0 0 1-2.36 0L3.32 8.895a2.25 2.25 0 0 1-1.07-1.902V6.75"})})}function j(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.47h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.009C18.343 21.128 22 16.991 22 12Z"})})}function u(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"})})}function f(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.8,stroke:"currentColor","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364L10.5 6.812a4.5 4.5 0 0 0 7.244 1.242l-4.5 4.5"})})}function r({href:o,variant:i="surface",children:t,"data-od-id":n,target:a="_self",rel:l,ariaLabel:s}){const c=i==="accent"?"jbh-pill jbh-pill--accent":i==="ghost"?"jbh-pill jbh-pill--ghost":"jbh-pill jbh-pill--surface";return e.jsx("a",{href:o,className:c,"data-od-id":n,target:a!=="_self"?a:void 0,rel:a!=="_self"?l??"noopener noreferrer":void 0,"aria-label":s,children:t})}const x=()=>e.jsxs("div",{className:"jbh-card-page",children:[e.jsx("style",{children:p}),e.jsxs("div",{className:"jbh-card","data-od-id":"card",children:[e.jsx("div",{className:"jbh-profile","data-od-id":"profile",children:e.jsx("img",{src:d,style:{width:"60px"}})}),e.jsxs("div",{className:"jbh-name","data-od-id":"name",children:["LJ ",e.jsx("span",{className:"jbh-accent",children:"Constructora"})]}),e.jsx("p",{className:"jbh-tagline",children:"Construcción y remodelación en Tijuana"}),e.jsxs("div",{className:"jbh-pills","data-od-id":"pills",children:[e.jsxs(r,{href:"https://wa.me/526641641462?text=Hola%2C%20vi%20su%20tarjeta%20y%20quiero%20informaci%C3%B3n",variant:"accent","data-od-id":"pill-whatsapp",target:"_blank",ariaLabel:"Escríbenos por WhatsApp",children:[e.jsx(m,{}),"Escríbenos por WhatsApp"]}),e.jsxs(r,{href:"tel:+526641641462",variant:"surface","data-od-id":"pill-call",ariaLabel:"Llamar ahora",children:[e.jsx(g,{}),"Llamar ahora"]}),e.jsxs(r,{href:"mailto:ljconstruccionmexico@gmail.com",variant:"surface","data-od-id":"pill-email",ariaLabel:"Enviar correo",children:[e.jsx(b,{}),"Enviar correo"]}),e.jsxs(r,{href:"https://www.facebook.com/profile.php?id=61593445040956",variant:"surface","data-od-id":"pill-facebook",target:"_blank",ariaLabel:"Síguenos en Facebook",children:[e.jsx(j,{}),"Síguenos en Facebook"]}),e.jsxs(r,{href:"https://www.instagram.com/ljconstructora/",variant:"surface","data-od-id":"pill-instagram",target:"_blank",ariaLabel:"Síguenos en Instagram",children:[e.jsx(u,{}),"Síguenos en Instagram"]}),e.jsxs(r,{href:"/",variant:"ghost","data-od-id":"pill-site",ariaLabel:"Ver sitio completo",children:[e.jsx(f,{}),"Ver sitio completo"]})]})]})]}),w=h("/codigo-qr")({component:x});export{w as Route};
//# sourceMappingURL=codigo-qr.lazy-ChT4JRKF.js.map
