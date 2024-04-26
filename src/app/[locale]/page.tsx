import { MySelf } from "@/widgets/MySelf";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-[56px]">
      <MySelf />
    </div>
  );
};

export default page;
