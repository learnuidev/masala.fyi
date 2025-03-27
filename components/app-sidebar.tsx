"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { useTranslation } from "@/libs/i18n-next/use-translation";
import Link from "next/link";

export function AppSidebar() {
  const { t } = useTranslation(["sidebar", "banner"]);
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="font-bold text-xl lowercase">{t("banner:title")}</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="flex gap-4 mt-4">
          <Link href="/dashboard">{t("sidebar:dashboard")}</Link>
          <Link href="/analytics">{t("sidebar:analytics")}</Link>
          <Link href="/recipes">{t("sidebar:recipes")}</Link>
          <Link href="/timeline">{t("sidebar:timeline")}</Link>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Settings</SidebarFooter>
    </Sidebar>
  );
}
