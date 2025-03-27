"use client";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export default function DashboardPage() {
  const { t } = useTranslation(["dashboard"]);
  return (
    <div>
      <h1 className="text-2xl font-bold">{t("dashboard:title")}</h1>
    </div>
  );
}
