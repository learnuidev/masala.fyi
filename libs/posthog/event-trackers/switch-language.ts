import posthog from "posthog-js";

const switchLanguageEventName = "switch-language";
export const captureSwitchLanguage = (lang: string) => {
  posthog.capture(switchLanguageEventName, { lang });
};
