// Library Imports
import { createFileRoute } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Functions, Helpers, Utils, and Hooks
//import useDeviceLanguage from "../hooks/useDeviceLanguage";
// Components
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { WhyUs } from "../components/WhyUs";
import { Gallery } from "../components/Gallery";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
// CSS
import "../css/page-specific/home.scss";

const Index: React.FC = () => {
  //const deviceLanguage = useDeviceLanguage();

  return (
    <div className="home-page">
      <HelmetProvider>
        <Helmet>
          <title>Home - La Estrellita</title>
          <meta
            name="description"
            content="Taste the best of Honduras and Mexico at La Estrellita Food Truck in Greenville, SC. Fresh tacos, savory barbecue, and traditional dishes made daily."
          />
          <link rel="canonical" href="https://la-estrellita-sc.com/" />

          {/* Open Graph */}
          <meta property="og:title" content="Home - La Estrellita" />
          <meta
            property="og:description"
            content="Taste the best of Honduras and Mexico at La Estrellita Food Truck in Greenville, SC. Fresh tacos, savory barbecue, and traditional dishes made daily."
          />
          <meta property="og:url" content="https://la-estrellita-sc.com/" />
          <meta
            property="og:image"
            content="https://la-estrellita-sc.com/assets/logo-L6dJgA8S.webp"
          />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Home - La Estrellita" />
          <meta
            name="twitter:description"
            content="Taste the best of Honduras and Mexico at La Estrellita Food Truck in Greenville, SC. Fresh tacos, savory barbecue, and traditional dishes made daily."
          />
          <meta
            name="twitter:image"
            content="https://la-estrellita-sc.com/assets/logo-L6dJgA8S.webp"
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
