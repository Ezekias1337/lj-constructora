import { createLazyFileRoute } from "@tanstack/react-router";

/* ------------------------------------------------------------------ */
/*  Tarjeta Digital — QR landing page (link-in-bio style)             */
/*  Drop-in route for an existing TanStack Router + Vite + React repo */
/* ------------------------------------------------------------------ */

/* ---------- inline styles (mirrors the original HTML) ---------- */
const css = `
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
`;

/* ---------- SVG icon components ---------- */

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg
      className="jbh-badge"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-label="Verificado"
    >
      <path d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 1.343 2.162l.003.012a4.49 4.49 0 0 1 .853 2.842l-.003.012a4.49 4.49 0 0 1-1.343 2.162l-.003.012c-.537.664-1.198 1.198-1.946 1.568A8.97 8.97 0 0 1 12 15.75a8.97 8.97 0 0 1-4.957-1.195 7.48 7.48 0 0 1-1.946-1.568l-.003-.012a4.49 4.49 0 0 1-1.343-2.162l.003-.012A4.49 4.49 0 0 1 8.603 3.799Zm4.196 10.201a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.97 1.97-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 10.5c0-3.866-3.134-7-7-7s-7 3.134-7 7c0 1.89.756 3.605 1.984 4.848L4 21l5.868-1.54A6.965 6.965 0 0 0 10 17.5c3.866 0 7-3.134 7-7Z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.902l-7.5 4.275a2.25 2.25 0 0 1-2.36 0L3.32 8.895a2.25 2.25 0 0 1-1.07-1.902V6.75"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.47h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.009C18.343 21.128 22 16.991 22 12Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364L10.5 6.812a4.5 4.5 0 0 0 7.244 1.242l-4.5 4.5"
      />
    </svg>
  );
}

/* ---------- Pill button component ---------- */

interface PillLinkProps {
  href: string;
  variant?: "accent" | "surface" | "ghost";
  children: React.ReactNode;
  "data-od-id"?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

function PillLink({
  href,
  variant = "surface",
  children,
  "data-od-id": dataOdId,
  target = "_self",
  rel,
  ariaLabel,
}: PillLinkProps) {
  const variantClass =
    variant === "accent"
      ? "jbh-pill jbh-pill--accent"
      : variant === "ghost"
        ? "jbh-pill jbh-pill--ghost"
        : "jbh-pill jbh-pill--surface";

  return (
    <a
      href={href}
      className={variantClass}
      data-od-id={dataOdId}
      target={target !== "_self" ? target : undefined}
      rel={target !== "_self" ? (rel ?? "noopener noreferrer") : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

/* ---------- Social icon button ---------- */

interface SocialPillProps {
  href: string;
  children: React.ReactNode;
  "data-od-id"?: string;
  ariaLabel: string;
}

/* function SocialPill({
  href,
  children,
  "data-od-id": dataOdId,
  ariaLabel,
}: SocialPillProps) {
  return (
    <a
      href={href}
      className="jbh-social-pill"
      data-od-id={dataOdId}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
} */

/* ---------- Main route component ---------- */

interface TarjetaDigitalProps {}

const TarjetaDigital: React.FC<TarjetaDigitalProps> = () => (
  <div className="jbh-card-page">
    <style>{css}</style>
    <div className="jbh-card" data-od-id="card">
      {/* Profile photo */}
      <div className="jbh-profile" data-od-id="profile">
        <UserIcon />
      </div>

      {/* Name + verified badge */}
      <div className="jbh-name" data-od-id="name">
        JBH <span className="jbh-accent">Construction</span>
        <BadgeIcon />
      </div>

      {/* Tagline */}
      <p className="jbh-tagline">Construcción y remodelación en Tijuana</p>

      {/* Pill buttons */}
      <div className="jbh-pills" data-od-id="pills">
        {/* WhatsApp (accent) */}
        <PillLink
          href="https://wa.me/526640000000?text=Hola%2C%20vi%20su%20tarjeta%20y%20quiero%20informaci%C3%B3n"
          variant="accent"
          data-od-id="pill-whatsapp"
          target="_blank"
          ariaLabel="Escríbenos por WhatsApp"
        >
          <WhatsAppIcon />
          Escríbenos por WhatsApp
        </PillLink>

        {/* Call */}
        <PillLink
          href="tel:+526640000000"
          variant="surface"
          data-od-id="pill-call"
          ariaLabel="Llamar ahora"
        >
          <PhoneIcon />
          Llamar ahora
        </PillLink>

        {/* Email */}
        <PillLink
          href="mailto:contacto@jbhconstruction.com"
          variant="surface"
          data-od-id="pill-email"
          ariaLabel="Enviar correo"
        >
          <MailIcon />
          Enviar correo
        </PillLink>

        {/* Facebook */}
        <PillLink
          href="https://facebook.com/"
          variant="surface"
          data-od-id="pill-facebook"
          target="_blank"
          ariaLabel="Síguenos en Facebook"
        >
          <FacebookIcon />
          Síguenos en Facebook
        </PillLink>

        {/* Instagram */}
        <PillLink
          href="https://instagram.com/"
          variant="surface"
          data-od-id="pill-instagram"
          target="_blank"
          ariaLabel="Síguenos en Instagram"
        >
          <InstagramIcon />
          Síguenos en Instagram
        </PillLink>

        {/* Ver sitio completo (secondary ghost) */}
        <PillLink
          href="jbh-construction-landing.html"
          variant="ghost"
          data-od-id="pill-site"
          ariaLabel="Ver sitio completo"
        >
          <GlobeIcon />
          Ver sitio completo
        </PillLink>
      </div>
    </div>
  </div>
);

export const Route = createLazyFileRoute("/codigo-qr")({
  component: TarjetaDigital,
});
