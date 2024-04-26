import { Header } from "@/widgets/Header";
import "./globals.css";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <>
          <Header />
          <article className=" max-w-[1200px] mx-auto">{children}</article>
        </>
      </body>
    </html>
  );
}
