import { MyLink } from "@/shared/ui/Link";
import { useTranslations } from "next-intl";

import React from "react";

const Navs = () => {
  const t = useTranslations();
  const navs = [
    { id: 1, name: `${t("about")}` },
    { id: 2, name: `${t("projects")}` },
  ];
  return (
    <nav>
      <ul className=" flex gap-3">
        {navs.map((nav) => (
          <li key={nav.id}>
            <MyLink href={`/${nav.name}`} text={nav.name} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navs;
