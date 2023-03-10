import styles from "./Header.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Select, MenuItem } from "@mui/material";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header__searchbar"]}>
        <div className={styles["header__container-logo"]}>
          <img src="media/github-mark.png" alt="github logo" width={40} />
        </div>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
