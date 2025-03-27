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
  const { t } = useTranslation(["sidebar"]);
  return (
    <Sidebar>
      <SidebarHeader>
        <h1>Sidebar</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="flex gap-4 mt-4">
          <Link href="/dashboard">{t("sidebar:dashboard")}</Link>
          <Link href="/analytics">{t("sidebar:analytics")}</Link>
          <Link href="/analytics">{t("sidebar:timeline")}</Link>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Settings</SidebarFooter>
    </Sidebar>
  );
}
