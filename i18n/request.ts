import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async ({ requestLocale }) => {
  // Try to get locale from URL routing first, then cookies, then default
  let locale = await requestLocale;

  if (!locale) {
    const cookieStore = await cookies();
    locale = cookieStore.get("locale")?.value || "en";
  }

  return {
    locale,
    timeZone: "Asia/Riyadh",
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
