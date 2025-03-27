import { i18nOptions } from "@/libs/i18n-next/i18n-config";

import analytics from "@/locales/en/analytics.json";
import banner from "@/locales/en/banner.json";
import dashboard from "@/locales/en/dashboard.json";
import recipes from "@/locales/en/recipes.json";
import sidebar from "@/locales/en/sidebar.json";
import timeline from "@/locales/en/timeline.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof i18nOptions.defaultNS;
    resources: {
      analytics: typeof analytics;
      banner: typeof banner;
      dashboard: typeof dashboard;
      recipes: typeof recipes;
      sidebar: typeof sidebar;
      timeline: typeof timeline;
    };
  }
}

