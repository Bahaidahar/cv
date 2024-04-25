import styles from "../styles/Header.module.scss";
import Navs from "./Navs";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Baha</h1>
        <div>
          <Navs />
        </div>
      </div>
    </header>
  );
};

export default Header;
