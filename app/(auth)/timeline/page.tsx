"use client";

import { PageTitle } from "@/components/page-title";
import { useTranslation } from "react-i18next";

export default function TimelinePage() {
  const { t } = useTranslation(["timeline"]);
  return (
    <div>
      <PageTitle>{t("timeline:title")}</PageTitle>
    </div>
  );
}
