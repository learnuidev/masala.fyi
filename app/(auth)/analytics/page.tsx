"use client";

import { PageTitle } from "@/components/page-title";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export default function AnalyticsPage() {
  const { t } = useTranslation(["analytics"]);
  return (
    <div>
      <PageTitle>{t("analytics:title")}</PageTitle>
    </div>
  );
}
