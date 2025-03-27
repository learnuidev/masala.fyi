import { i18nOptions } from "@/libs/i18n-next/i18n-config";

import banner from "@/locales/en/banner.json";
import dashboard from "@/locales/en/dashboard.json";
import sidebar from "@/locales/en/sidebar.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof i18nOptions.defaultNS;
    resources: {
      banner: typeof banner;
      dashboard: typeof dashboard;
      sidebar: typeof sidebar;
    };
  }
}

