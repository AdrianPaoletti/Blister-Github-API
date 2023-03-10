import { FormEvent, useContext, useEffect, useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

import styles from "./Header.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import { useRouter } from "next/router";
import SearcherContext from "@/store/context/SearcherContext";

const Header = () => {
  const [sortValue, setSortValue] = useState<string>("stars");
  const router = useRouter();
  const sortValues = ["stars", "forks", "help-wanted-issues", "updated"];
  const { updateRouter, setIsLoading } = useContext(SearcherContext);
  const { sort, name } = router.query;

  useEffect(() => {
    if (sort?.length && sortValues.includes(sort as string)) {
      setSortValue(sort as string);
    }
  }, []);

  const handleChange = (
    event: FormEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const sortedValue = (event.target as HTMLTextAreaElement).value;
    setSortValue(sortedValue);
    if (name?.length) {
      updateRouter({ sort: sortedValue, page: 1 });
      setIsLoading(true);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles["header__searchbar"]}>
        <div className={styles["header__container-logo"]}>
          <img src="media/github-mark.png" alt="github logo" width={40} />
        </div>
        <SearchBar sortValue={sortValue} />
        <TextField
          select
          value={sortValue}
          inputProps={{
            onChange: (event) => handleChange(event),
          }}
          SelectProps={{
            IconComponent: (props) => (
              <FilterListOutlinedIcon
                {...props}
                sx={{ marginRight: "0.5rem" }}
              />
            ),
          }}
        >
          {sortValues.map((option) => (
            <MenuItem
              key={option}
              value={option}
              className={styles["header__filter-option"]}
            >
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </header>
  );
};

export default Header;
