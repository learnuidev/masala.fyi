"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";

export default function SettingsPage() {
  const { t } = useTranslation(["settings"]);
  return (
    <div>
      <h1 className="text-2xl font-bold">{t("settings:title")}</h1>
    </div>
  );
}
