import { getLocale } from "next-intl/server";

/**
 * This can be user in Server side components only , since getLocale only available in server components
 *
 * @returns {Promise<{ isRTL: boolean; dir: string }>} - Object containing isRTL and dir
 */

export const AppDirection = async (): Promise<{
  isRTL: boolean;
  dir: string;
}> => {
  const locale = await getLocale();
  return {
    isRTL: locale === "ar",
    dir: locale === "ar" ? "rtl" : "ltr",
  };
};
