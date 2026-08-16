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
import "../css/page-specific/privacy-policy.scss";

const PrivacyPolicy = () => {
  const deviceLanguage = useDeviceLanguage();

  return (
    <div className="privacy-policy">
      <HelmetProvider>
        <Helmet>
          <title>
            {getLocalization("privacyPolicy", "seoTitle", deviceLanguage)}
          </title>
        </Helmet>
      </HelmetProvider>

      <PageHeader
        title={getLocalization("privacyPolicy", "pageTitle", deviceLanguage)}
      />

      <div className="privacy-policy-wrapper padding-left-and-right">
        <p>
          {getLocalization("privacyPolicy", "introParagraph", deviceLanguage)}
        </p>
        <p>
          {getLocalization(
            "privacyPolicy",
            "analyticsParagraph",
            deviceLanguage
          )}
        </p>

        <h2 className="padding-top-40 padding-bottom-20">
          {getLocalization("privacyPolicy", "section1Title", deviceLanguage)}
        </h2>

        <p>
          <ul>
            {(
              getLocalization(
                "privacyPolicy",
                "section1List",
                deviceLanguage
              ) as unknown as string[]
            ).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </p>

        <h2 className="padding-top-40 padding-bottom-20">
          {getLocalization("privacyPolicy", "section2Title", deviceLanguage)}
        </h2>

        <p>
          <ul>
            {(
              getLocalization(
                "privacyPolicy",
                "section2List",
                deviceLanguage
              ) as unknown as string[]
            ).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </p>

        <h2 className="padding-top-40 padding-bottom-20">
          {getLocalization("privacyPolicy", "section3Title", deviceLanguage)}
        </h2>

        <p>
          <ul>
            {(
              getLocalization(
                "privacyPolicy",
                "section3List",
                deviceLanguage
              ) as unknown as string[]
            ).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </p>

        <h2 className="padding-top-40 padding-bottom-20">
          {getLocalization("privacyPolicy", "section4Title", deviceLanguage)}
        </h2>

        <p>
          <ul>
            {(
              getLocalization(
                "privacyPolicy",
                "section4List",
                deviceLanguage
              ) as unknown as string[]
            ).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </p>

        <h2 className="padding-top-40 padding-bottom-20">
          {getLocalization("privacyPolicy", "section5Title", deviceLanguage)}
        </h2>
        <p>
          {getLocalization("privacyPolicy", "section5Text", deviceLanguage)}
        </p>

        <h2 className="padding-top-40 padding-bottom-20">
          {getLocalization("privacyPolicy", "section6Title", deviceLanguage)}
        </h2>
        <p>
          {getLocalization("privacyPolicy", "section6Text", deviceLanguage)}
        </p>

        <h2 className="padding-top-40 padding-bottom-20">
          {getLocalization("privacyPolicy", "section7Title", deviceLanguage)}
        </h2>
        <p>
          {getLocalization("privacyPolicy", "section7Text", deviceLanguage)}{" "}
          <GeneralLink
            text={getLocalization(
              "privacyPolicy",
              "contactEmail",
              deviceLanguage
            )}
            url={`mailto:${getLocalization("privacyPolicy", "contactEmail", deviceLanguage)}`}
            openInNewTab={false}
          />
          .
        </p>

        <p>{getLocalization("privacyPolicy", "consentText", deviceLanguage)}</p>
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute("/privacy-policy" as never)({
  component: PrivacyPolicy,
});
