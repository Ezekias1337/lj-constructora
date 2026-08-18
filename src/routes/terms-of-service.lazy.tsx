// Library Imports
import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { GeneralLink } from "../components/general-page-layout/link/GeneralLink";
// Functions, Helpers, Utils, and Hooks
import { getLocalization } from "../helpers/localization";
import useDeviceLanguage from "../hooks/useDeviceLanguage";
// CSS
import "../css/page-specific/terms-of-service.scss";

const TermsOfService = () => {
  const deviceLanguage = useDeviceLanguage();

  return (
    <div className="terms-of-service">
      <HelmetProvider>
        <Helmet>
          <title>
            {getLocalization("termsOfService", "seoTitle", deviceLanguage)}
          </title>
        </Helmet>
      </HelmetProvider>

      <PageHeader
        title={getLocalization("termsOfService", "headerTitle", deviceLanguage)}
      />

      <div className="terms-of-service-wrapper padding-left-and-right">
        {/* Intro paragraph */}
        <p>
          {getLocalization("termsOfService", "introParagraph", deviceLanguage)}
        </p>

        {/* Section 1 */}
        <h2 className="padding-top-40 padding-bottom-20">
          {getLocalization("termsOfService", "section1Title", deviceLanguage)}
        </h2>
        <p>
          {getLocalization("termsOfService", "section1Text", deviceLanguage)}
        </p>

        {/* Section 2 */}
        <h2 className="padding-top-40 padding-bottom-20">
          {getLocalization("termsOfService", "section2Title", deviceLanguage)}
        </h2>
        <p>
          {getLocalization("termsOfService", "section2Text", deviceLanguage)}
          
          <ul>
            {(
              getLocalization(
                "termsOfService",
                "section2List",
                deviceLanguage
              ) as unknown as string[]
            ).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </p>

        {/* Section 3 */}
        <h2 className="padding-top-40 padding-bottom-20">
          {getLocalization("termsOfService", "section3Title", deviceLanguage)}
        </h2>
        <p>
          {getLocalization("termsOfService", "section3Text", deviceLanguage)}
        </p>

        {/* Section 4 */}
        <h2 className="padding-top-40 padding-bottom-20">
          {getLocalization("termsOfService", "section4Title", deviceLanguage)}
        </h2>
        <p>
          {getLocalization("termsOfService", "section4Text", deviceLanguage)}
        </p>

        {/* Section 5 */}
        <h2 className="padding-top-40 padding-bottom-20">
          {getLocalization("termsOfService", "section5Title", deviceLanguage)}
        </h2>
        <p>
          {getLocalization("termsOfService", "section5Text", deviceLanguage)}
        </p>

        {/* Section 6 */}
        <h2 className="padding-top-40 padding-bottom-20">
          {getLocalization("termsOfService", "section6Title", deviceLanguage)}
        </h2>
        <p>
          {getLocalization("termsOfService", "section6Text", deviceLanguage)}
        </p>

        {/* Section 7 */}
        <h2 className="padding-top-40 padding-bottom-20">
          {getLocalization("termsOfService", "section7Title", deviceLanguage)}
        </h2>
        <p>
          {getLocalization("termsOfService", "section7Text", deviceLanguage)}
        </p>

        {/* Section 8 */}
        <h2 className="padding-top-40 padding-bottom-20">
          {getLocalization("termsOfService", "section8Title", deviceLanguage)}
        </h2>
        <p>
          {getLocalization("termsOfService", "section8Text", deviceLanguage)}{" "}
          <GeneralLink
            text={getLocalization(
              "termsOfService",
              "contactEmail",
              deviceLanguage
            )}
            url={`mailto:${getLocalization(
              "termsOfService",
              "contactEmail",
              deviceLanguage
            )}`}
            openInNewTab={false}
          />
          .
        </p>

        {/* Consent */}
        <p>
          {getLocalization("termsOfService", "consentText", deviceLanguage)}
        </p>
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute("/terms-of-service")({
  component: TermsOfService,
});
