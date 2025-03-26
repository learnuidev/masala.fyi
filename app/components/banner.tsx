"use client";
import { useTranslation } from "@/libs/i18n-next/use-translation";
import Link from "next/link";

export const Banner = () => {
  const { t } = useTranslation(["banner"]);
  return (
    <section className="max-w-md m-auto flex justify-center items-center flex-col">
      <h1 className="text-center mt-24 lg:text-7xl text-4xl font-bold lowercase">
        {t("banner:title")}
      </h1>
      <p className="text-center mt-4 text-xl lg:text-2xl dark:text-gray-300 text-gray-700 font-light">
        {t("banner:description")}
      </p>

      <Link href="/dashboard" className="mt-8 border-2 px-2 py-1">
        {t("banner:get.started")}
      </Link>
    </section>
  );
};
