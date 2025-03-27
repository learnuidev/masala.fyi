"use client";
import { PageBodyContainer } from "@/components/page-body-container";
import { PageTitle } from "@/components/page-title";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export default function DashboardPage() {
  const { t } = useTranslation(["dashboard"]);
  return (
    <div>
      <PageTitle>{t("dashboard:title")}</PageTitle>

      <PageBodyContainer className="h-80">Dashboard Content</PageBodyContainer>
    </div>
  );
}
