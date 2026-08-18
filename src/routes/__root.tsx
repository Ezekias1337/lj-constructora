// Library Imports
import { useEffect } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
//import { TanStackRouterDevtools } from "@tanstack/router-devtools";

// Functions, Helpers, Utils, and Hooks
//import { getLocalization } from "../helpers/localization";
import useAnalytics from "../hooks/useAnalytics";
import usePageTracking from "../hooks/usePageTracking";
import useTheme from "../hooks/useTheme";
import useDeviceLanguage from "../hooks/useDeviceLanguage";

// Consistent Across Pages
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer"
//import ConsentBanner from "../components/consent-banner/ConsentBanner";
import ScrollToTop from "../components/general-page-layout/ScrollToTop";

// Constants
//const IS_DEV = import.meta.env.VITE_IS_DEV;

const RootComponent: React.FC = () => {
  useTheme();
  useAnalytics();
  usePageTracking();
  const deviceLanguage = useDeviceLanguage();

  useEffect(() => {
    document.documentElement.lang = deviceLanguage === "es-US" ? "es" : "en";
  }, [deviceLanguage]);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      {/* {IS_DEV === "TRUE" && <TanStackRouterDevtools />} */}
      <Footer />
      {/* <ConsentBanner
        bodyText={getLocalization("cookieBanner", "body", deviceLanguage)}
        button1={{
          text: getLocalization("cookieBanner", "accept", deviceLanguage),
          variant: "primary",
          buttonSize: "small",
        }}
        button2={{
          text: getLocalization("cookieBanner", "decline", deviceLanguage),
          variant: "primary-outline",
          buttonSize: "small",
        }}
      /> */}
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
