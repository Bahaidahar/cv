import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations();
  return <div>{t("hello")}</div>;
};

export default page;
