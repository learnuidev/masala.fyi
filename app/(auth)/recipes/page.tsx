"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";

export default function RecipesPage() {
  const { t } = useTranslation(["recipes"]);
  return (
    <div>
      <h1 className="text-2xl font-bold">{t("recipes:title")}</h1>
    </div>
  );
}
