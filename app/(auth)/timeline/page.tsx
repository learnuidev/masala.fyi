"use client";

import { PageBodyContainer } from "@/components/page-body-container";
import { PageTitle } from "@/components/page-title";
import { useTranslation } from "react-i18next";

export default function TimelinePage() {
  const { t } = useTranslation(["timeline"]);
  return (
    <div>
      <PageTitle>{t("timeline:title")}</PageTitle>

      <PageBodyContainer className="h-80">
        <h2 className="text-xl font-bold">Timeline Content</h2>
        <p className="mt-2 text-gray-500">
          Todo fill this page with followers, top recipes etc
        </p>
      </PageBodyContainer>
    </div>
  );
}
