import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ToggleTheme } from "@/components/toggle-theme";
import { I18NextHtmlProvider } from "@/libs/i18n-next/i18n-next-html-provider";
import { LanguageSwitcher } from "@/libs/i18n-next/language-switcher";
import { PostHogProvider } from "@/components/posthog-provider";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { appConfig } from "@/lib/app-config";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "curry.fyi",
  description: "AI based calorie + weight tracking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("APP CONFIG", appConfig);
  return (
    <I18NextHtmlProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSidebar />

              <main className="w-full">
                <nav className="flex justify-between items-center px-4 py-2 w-full">
                  <SidebarTrigger />
                  <div className="flex items-center">
                    <ToggleTheme />
                    <LanguageSwitcher />
                  </div>
                </nav>
                <div className="px-4">{children}</div>
              </main>
            </SidebarProvider>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </I18NextHtmlProvider>
  );
}
