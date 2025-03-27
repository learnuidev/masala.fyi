"use client";

import { useTranslation } from "react-i18next";

export default function TimelinePage() {
  const { t } = useTranslation(["timeline"]);
  return (
    <div>
      <h1 className="text-2xl font-bold">{t("timeline:title")}</h1>
    </div>
  );
}
