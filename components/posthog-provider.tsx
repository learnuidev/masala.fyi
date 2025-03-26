// app/providers.jsx
"use client";

import { appConfig } from "@/lib/app-config";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(appConfig.posthog.apiKey, {
      api_host: appConfig.posthog.apiHost,
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
