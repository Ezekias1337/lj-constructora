// Library Imports
import { useEffect, useState } from "react";

type Locale = "en-US" | "es-US";

const useDeviceLanguage = (): Locale => {
    const [locale, setLocale] = useState<Locale>("en-US"); // default to English

    useEffect(() => {
        const userLang = navigator.language;

        if (userLang.includes("es-")) {
            setLocale("es-US");
        } else {
            setLocale("en-US");
        }
    }, []);

    return locale;
};

export default useDeviceLanguage;
