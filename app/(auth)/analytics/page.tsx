"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";

export default function AnalyticsPage() {
  const { t } = useTranslation(["analytics"]);
  return (
    <div>
      <h1 className="text-2xl font-bold">{t("analytics:title")}</h1>
    </div>
  );
}
