import { useTranslations } from "next-intl";
import Link from "next/link";
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
            <Link href={`/${nav.name}`}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navs;
