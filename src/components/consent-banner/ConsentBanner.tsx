// Library Imports
import { useState, useEffect } from "react";
// Hooks
import useGlobalPrivacyControl from "../../hooks/useGlobalPrivacyControl";
// Interfaces and Types
import { ButtonProps } from "../button/dependents/types-and-interfaces/ButtonProps";
// Components
import { Button } from "../button/Button";
// CSS
import "./consent-banner.scss";

type ConsentBannerProps = {
  bodyText: string;
  button1: ButtonProps;
  button2?: ButtonProps;
};

const COOKIE_NAME = "cookieConsent";

const ConsentBanner: React.FC<ConsentBannerProps> = ({
  bodyText,
  button1,
  button2 = null,
}) => {
  const hasGlobalPrivacyControl = useGlobalPrivacyControl();
  const [consentResolved, setConsentResolved] = useState(false);

  useEffect(() => {
    const hasConsent = document.cookie.includes(`${COOKIE_NAME}=`);
    if (hasConsent) {
      setConsentResolved(true);
    }
  }, []);

  const setCookie = (value: true | false) => {
    document.cookie = `${COOKIE_NAME}=${value}; path=/; SameSite=Lax; max-age=${60 * 60 * 24 * 365}`;
  };

  const handleAccept = () => {
    setCookie(true);
    setConsentResolved(true);
    window.dispatchEvent(new Event("cookie-consent-accepted"));
  };

  const handleDecline = () => {
    setCookie(false);
    setConsentResolved(true);
    window.dispatchEvent(new Event("cookie-consent-declined"));
  };

  // Treat GPC as implicit decline
  if (consentResolved || hasGlobalPrivacyControl) {
    return null;
  }

  return (
    <div className="consent-banner padding-top-20 padding-bottom-20 display-flex justify-content-center align-items-center gap-10">
      <p className="consent-banner-text">{bodyText}</p>

      <div className="button-wrapper">
        <Button
          text={button1.text}
          variant={button1.variant}
          buttonSize={button1.buttonSize}
          onClickHandler={handleAccept}
        />

        {button2 && (
          <Button
            text={button2.text}
            variant={button2.variant}
            buttonSize={button2.buttonSize}
            onClickHandler={handleDecline}
          />
        )}
      </div>
    </div>
  );
};

export default ConsentBanner;
