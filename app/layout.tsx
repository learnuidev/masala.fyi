import { ThemeProvider } from "@/components/theme-provider";
import { I18NextHtmlProvider } from "@/libs/i18n-next/i18n-next-html-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { appConfig } from "@/lib/app-config";

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
  return (
    <I18NextHtmlProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </I18NextHtmlProvider>
  );
}
