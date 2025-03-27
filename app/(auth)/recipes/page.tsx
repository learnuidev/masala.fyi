"use client";

import { PageTitle } from "@/components/page-title";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export default function RecipesPage() {
  const { t } = useTranslation(["recipes"]);
  return (
    <div>
      <PageTitle>{t("recipes:title")}</PageTitle>
    </div>
  );
}
