import Link from "next/link";
import { translations, SupportedLocale } from "../../lib/translations";

export default function Home({
  params,
}: {
  params: { locale: SupportedLocale };
}) {
  // Link to home page in the locale which is not the current one
  const otherLocale = params.locale === "en" ? "ka" : "en";
  const otherLocaleLink = `/${otherLocale}/home`;

  const t = translations[params.locale] || translations.en;

  return (
    <div>
      <Link href={otherLocaleLink}>{otherLocale}</Link>
      <h1>{t.title}</h1>
    </div>
  );
}
