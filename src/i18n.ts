import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === "en"
        ? 
          import("./shared/locales/en.json")
        : import(`./shared/locales/${locale}.json`))
    ).default,
  };
});