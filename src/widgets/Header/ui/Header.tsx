import { MyLink } from "@/shared/ui/Link";
import styles from "../styles/Header.module.scss";
import Navs from "./Navs";
import SelectLanguage from "./SelectLanguage";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <MyLink
          href={"/"}
          text={<h1 className=" font-bold text-4xl">YeBa</h1>}
        />
        <div className=" flex gap-4 items-center">
          <Navs />
          <SelectLanguage />
        </div>
      </div>
    </header>
  );
};

export default Header;
