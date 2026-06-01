"use client";
import { NextIntlClientProvider } from "next-intl";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import type { Messages } from "next-intl";

type Locale = "en" | "ar";
type Direction = "ltr" | "rtl";

const LocaleContext = createContext<
  | {
      locale: Locale;
      dir: Direction;
      toggleLocale: () => void;
    }
  | undefined
>(undefined);

export function LocaleProvider({
  children,
  locale: initialLocale,
  messages: initialMessages,
}: {
  children: ReactNode;
  locale: Locale;
  messages: Messages;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [messages, setMessages] = useState<Messages>(initialMessages);
  const dir: Direction = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
  }, [locale, dir]);

  const toggleLocale = async () => {
    const next: Locale = locale === "en" ? "ar" : "en";
    setLocale(next);
    // Save locale to cookie so the server knows the locale on next request
    document.cookie = `locale=${next};path=/;max-age=31536000`;
    const msgs = (await import(`../messages/${next}.json`)).default;
    setMessages(msgs);
  };

  return (
    <LocaleContext.Provider value={{ locale, dir, toggleLocale }}>
      <NextIntlClientProvider
        locale={locale}
        messages={messages}
        timeZone="Asia/Riyadh"
      >
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext);
  if (!ctx)
    throw new Error("useLocaleContext must be used within a LocaleProvider");
  return ctx;
}
