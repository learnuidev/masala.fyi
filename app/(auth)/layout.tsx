import { ToggleTheme } from "@/components/toggle-theme";
import { LanguageSwitcher } from "@/libs/i18n-next/language-switcher";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { appConfig } from "@/lib/app-config";
import { PostHogProvider } from "@/components/posthog-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("APP CONFIG", appConfig);
  return (
    <PostHogProvider>
      <SidebarProvider>
        <AppSidebar />

        <main className="w-full">
          <nav className="flex justify-between items-center px-4 py-2 w-full">
            <SidebarTrigger className="px-0 mx-0" />
            <div className="flex items-center">
              <ToggleTheme />
              <LanguageSwitcher />
            </div>
          </nav>
          <div className="px-4">{children}</div>
        </main>
      </SidebarProvider>
    </PostHogProvider>
  );
}
