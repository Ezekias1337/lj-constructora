import cookieBannerEN from "../constants/locales/en-US/cookie-banner";
import footerEN from "../constants/locales/en-US/footer";
import homeEN from "../constants/locales/en-US/home";
import locationAndContactEN from "../constants/locales/en-US/location-and-contact";
import navbarEN from "../constants/locales/en-US/navbar";
import pageNotFoundEN from "../constants/locales/en-US/page-not-found";
import privacyPolicyEN from "../constants/locales/en-US/privacy-policy";
import sharedEN from "../constants/locales/en-US/shared";
import termsOfServiceEN from "../constants/locales/en-US/terms-of-service";

import cookieBannerES from "../constants/locales/es-US/cookie-banner";
import footerES from "../constants/locales/es-US/footer";
import homeES from "../constants/locales/es-US/home";
import locationAndContactES from "../constants/locales/es-US/location-and-contact";
import navbarES from "../constants/locales/es-US/navbar";
import pageNotFoundES from "../constants/locales/es-US/page-not-found";
import privacyPolicyES from "../constants/locales/es-US/privacy-policy";
import sharedES from "../constants/locales/es-US/shared";
import termsOfServiceES from "../constants/locales/es-US/terms-of-service";


export type Locale = "en-US" | "es-US";

const locales = {
    "en-US": {
        cookieBanner: cookieBannerEN,
        footer: footerEN,
        home: homeEN,
        locationAndContact: locationAndContactEN,
        navbar: navbarEN,
        pageNotFound: pageNotFoundEN,
        privacyPolicy: privacyPolicyEN,
        shared: sharedEN,
        termsOfService: termsOfServiceEN,
    },
    "es-US": {
        cookieBanner: cookieBannerES,
        footer: footerES,
        home: homeES,
        locationAndContact: locationAndContactES,
        navbar: navbarES,
        pageNotFound: pageNotFoundES,
        privacyPolicy: privacyPolicyES,
        shared: sharedES,
        termsOfService: termsOfServiceES,
    },
};


//let currentLocale: Locale = "en-US"; // default, you can detect via browser or user preference



export const getLocalization = <T extends keyof typeof locales["en-US"]>(
    section: T,
    keyPath: string,
    locale: Locale = "en-US"
): string => {
    const sectionData = locales[locale][section];
    const keys = keyPath.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = sectionData;

    for (const key of keys) {
        if (value[key] === undefined) return keyPath; // fallback to keyPath if missing
        value = value[key];
    }
    return value as string;
};
