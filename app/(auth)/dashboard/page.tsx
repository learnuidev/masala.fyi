"use client";
import { PageTitle } from "@/components/page-title";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export default function DashboardPage() {
  const { t } = useTranslation(["dashboard"]);
  return (
    <div>
      <PageTitle>{t("dashboard:title")}</PageTitle>
    </div>
  );
}
