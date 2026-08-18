// Library Imports
import { HelmetProvider, Helmet } from "react-helmet-async";
import { createLazyFileRoute } from "@tanstack/react-router";
// Components
import { Button } from "../components/button/Button";
// Functions, Helpers, Utils, and Hooks
import { getLocalization } from "../helpers/localization";
import useDeviceLanguage from "../hooks/useDeviceLanguage";
// CSS
import "../css/page-specific/page-not-found.scss";

const PageNotFound: React.FC = () => {
  const deviceLanguage = useDeviceLanguage();

  return (
    <div className="page-not-found padding-left-and-right padding-top-160 padding-bottom-160">
      <HelmetProvider>
        <Helmet>
          <title>
            {getLocalization("pageNotFound", "seoTitle", deviceLanguage)}
          </title>
        </Helmet>
      </HelmetProvider>

      <div className="page-not-found-warning padding-top-40 padding-bottom-40">
        <h2>This page does not exist.</h2>
      </div>

      <div className="page-not-found-explanation padding-top-40 padding-bottom-40">
        <h4>
          Please check the URL you have entered or click the button below to
          return to the home page.
        </h4>
      </div>

      <div className="page-not-found-button padding-top-40 padding-bottom-40">
        <Button
          variant="primary"
          buttonSize="large"
          text="Return Home"
          url="/"
        />
      </div>
    </div>
  );
};

export default PageNotFound;

export const Route = createLazyFileRoute("/$")({
  component: PageNotFound,
});
