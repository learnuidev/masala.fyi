"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/libs/i18n-next/use-translation";
import {
  AppWindow,
  ChartScatter,
  CookingPot,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactElement;
}) {
  const pathName = usePathname();

  return (
    <Link
      className={cn(
        pathName === href ? "font-bold" : "text-gray-500",
        "transition",
        "dark:hover:bg-[rgb(10,11,12)] hover:bg-gray-100 dark:hover:text-white hover:text-black py-2 px-1 rounded transition"
      )}
      href={href}
    >
      <div className="flex gap-2">
        {icon}
        {children}
      </div>
    </Link>
  );
}

export function AppSidebar() {
  const { t } = useTranslation(["sidebar", "banner"]);

  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="font-bold text-xl lowercase px-1">
          {t("banner:title")}
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="flex mt-4">
          <NavLink icon={<LayoutDashboard />} href="/dashboard">
            {t("sidebar:dashboard")}
          </NavLink>
          <NavLink icon={<ChartScatter />} href="/analytics">
            {t("sidebar:analytics")}
          </NavLink>
          <NavLink icon={<CookingPot />} href="/recipes">
            {t("sidebar:recipes")}
          </NavLink>
          <NavLink icon={<AppWindow />} href="/timeline">
            {t("sidebar:timeline")}
          </NavLink>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavLink icon={<Settings />} href="/settings">
          {t("sidebar:settings")}
        </NavLink>
      </SidebarFooter>
    </Sidebar>
  );
}
