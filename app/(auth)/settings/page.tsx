"use client";

import { PageTitle } from "@/components/page-title";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export default function SettingsPage() {
  const { t } = useTranslation(["settings"]);
  return (
    <div>
      <PageTitle>{t("settings:title")}</PageTitle>
    </div>
  );
}
