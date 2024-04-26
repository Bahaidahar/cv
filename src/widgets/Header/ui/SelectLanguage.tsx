"use client";
import KazakhstanIcon from "@/shared/icons/KazakhstanIcon";
import RussianIcon from "@/shared/icons/RussianIcon";
import UnitedStatesIcon from "@/shared/icons/UnitedStatesIcon";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SelectLanguage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathName = usePathname();
  const params = useParams();
  const locale = params["locale"];
  const [activeLang, setActiveLang] = useState("");
  const flags = [
    {
      id: 1,
      flag: <UnitedStatesIcon />,
      lang: "/en",
    },
    {
      id: 2,
      flag: <RussianIcon />,
      lang: "/ru",
    },
    {
      id: 3,
      flag: <KazakhstanIcon />,
      lang: "/kz",
    },
  ];
  useEffect(() => {
    setActiveLang(`/${locale}`);
  }, []);
  console.log(pathName);

  return (
    <div className=" relative">
      <div onClick={() => setShowMenu(!showMenu)}>
        {flags
          .filter((flag) => flag.lang == activeLang)
          .map((flag) => (
            <div key={flag.id}>{flag.flag}</div>
          ))}
      </div>
      <div>
        {showMenu ? (
          <div className=" absolute bg-white p-2 -right-2 rounded-[12px] shadow-xl">
            {flags
              .filter((flag) => flag.lang !== activeLang)
              .map((flag) => (
                <div key={flag.id} onClick={() => setActiveLang(flag.lang)}>
                  <Link href={`${flag.lang}${pathName.slice(3)}`}>
                    {flag.flag}
                  </Link>
                </div>
              ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SelectLanguage;
