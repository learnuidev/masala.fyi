"use client";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export const Banner = () => {
  const { t } = useTranslation(["banner"]);
  return (
    <section className="max-w-md m-auto flex justify-center items-center flex-col">
      <h1 className="text-center mt-24 text-4xl font-bold">
        {t("banner:title")}
      </h1>
      <p className="text-center mt-4 text-xl">{t("banner:description")}</p>
    </section>
  );
};
