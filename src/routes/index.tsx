// Library Imports
import { createFileRoute } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Functions, Helpers, Utils, and Hooks
//import useDeviceLanguage from "../hooks/useDeviceLanguage";
// Components
/* import { Navbar } from "../components/Navbar"; */
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { WhyUs } from "../components/WhyUs";
import { Gallery } from "../components/Gallery";
import { ContactForm } from "../components/ContactForm";
/* import { Footer } from "../components/Footer"; */
// CSS
import "../css/page-specific/home.scss";

const Index: React.FC = () => {
  //const deviceLanguage = useDeviceLanguage();

  return (
    <div className="home-page padding-left-and-right">
      <HelmetProvider>
        <Helmet>
          <title>Portada - LJ Constructora</title>
          <meta
            name="description"
            content="Con 15 años de experiencia en el sector de la construcción, LJ Constructora ofrece servicios de edificación y remodelación confiables y de alta calidad, adaptados a las necesidades únicas de cada cliente."
          />
          <link rel="canonical" href="https://ezekias1337.github.io/lj-constructora/" />

          {/* Open Graph */}
          <meta property="og:title" content="Portada - LJ Constructora" />
          <meta
            property="og:description"
            content="Con 15 años de experiencia en el sector de la construcción, LJ Constructora ofrece servicios de edificación y remodelación confiables y de alta calidad, adaptados a las necesidades únicas de cada cliente."
          />
          <meta property="og:url" content="https://ezekias1337.github.io/lj-constructora/" />
          <meta
            property="og:image"
            content="https://ezekias1337.github.io/lj-constructora/assets/logo-BpM_3yw5.png"
          />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Portada - LJ Constructora" />
          <meta
            name="twitter:description"
            content="Con 15 años de experiencia en el sector de la construcción, LJ Constructora ofrece servicios de edificación y remodelación confiables y de alta calidad, adaptados a las necesidades únicas de cada cliente."
          />
          <meta
            name="twitter:image"
            content="https://ezekias1337.github.io/lj-constructora/assets/logo-BpM_3yw5.png"
          />
        </Helmet>
      </HelmetProvider>

      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <ContactForm />
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
