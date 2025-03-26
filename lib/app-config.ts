import { z } from "zod";

const appConfigSchema = z.object({
  posthog: z.object({
    apiKey: z.string(),
    apiHost: z.string(),
  }),
});

// Type inference
type AppConfig = z.infer<typeof appConfigSchema>;

export const appConfig: AppConfig = appConfigSchema.parse({
  posthog: {
    apiKey: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    apiHost: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  },
});
