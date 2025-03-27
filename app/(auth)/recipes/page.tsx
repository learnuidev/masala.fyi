"use client";

import { PageBodyContainer } from "@/components/page-body-container";
import { PageTitle } from "@/components/page-title";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export default function RecipesPage() {
  const { t } = useTranslation(["recipes"]);
  return (
    <div>
      <PageTitle>{t("recipes:title")}</PageTitle>

      <PageBodyContainer className="h-120">Recipes Content</PageBodyContainer>
    </div>
  );
}
