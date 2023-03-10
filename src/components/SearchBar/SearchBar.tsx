import {
  Autocomplete,
  AutocompleteInputChangeReason,
  IconButton,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import styles from "./SearchBar.module.scss";
import useDebounce from "@/hooks/useDebounce";
import useRepositoryOptions from "@/hooks/useRepositoryOptions";
import { RepositoryOptions } from "@/models/repository";
import { MIN_INPUT_LENGTH } from "@/utils/constants";
import SearcherContext from "@/store/context/SearcherContext";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { updateRouter, setIsLoading } = useContext(SearcherContext);
  const router = useRouter();
  const { loadRepositoryOptions, repositoryOptions } = useRepositoryOptions();
  const debouncedInputValue = useDebounce(searchTerm, 250);

  useEffect(() => {
    const repositoryValue = router.query?.name as string;
    if (repositoryValue?.length) {
      setInputValue(repositoryValue);
    }
  }, []);

  useEffect(() => {
    if (debouncedInputValue) {
      loadRepositoryOptions(debouncedInputValue);
    }
  }, [debouncedInputValue]);

  const handleSearch = (optionName: string = "") => {
    setInputValue((previousInputValue) =>
      optionName.length ? optionName : previousInputValue
    );
    updateRouter(router, {
      name: optionName.length ? optionName : inputValue,
      page: 1,
    });
    setOpen(false);
    setIsLoading(true);
  };

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ): void => {
    const normalizedValue = value.trim();
    value.length <= MIN_INPUT_LENGTH && setOpen(false);

    switch (reason) {
      case "input":
        setInputValue(normalizedValue);
        value.length > MIN_INPUT_LENGTH && setSearchTerm(normalizedValue);
        break;
      case "reset":
        handleSearch();
        break;
      case "clear":
        setInputValue("");
        updateRouter(router, { name: "", page: "" });
        break;
      default:
        setInputValue("");
    }
  };

  const handleOpen = (event: React.SyntheticEvent<Element, Event>): void => {
    const target = event.target as HTMLTextAreaElement;
    if (target.value.length > MIN_INPUT_LENGTH) {
      setOpen(true);
      return;
    }
    setOpen(false);
  };

  return (
    <div className={styles.searchbar}>
      <Autocomplete
        options={repositoryOptions}
        renderOption={(props, option) => (
          <li
            {...props}
            key={option.id}
            onClick={() => handleSearch(option.name)}
          >
            {option.name}
          </li>
        )}
        getOptionLabel={(repository) =>
          (repository as RepositoryOptions).name || inputValue
        }
        size="small"
        freeSolo
        open={open}
        onOpen={handleOpen}
        onClose={() => setOpen(false)}
        onInputChange={handleChange}
        inputValue={inputValue}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search repository..."
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  <IconButton size="small" onClick={() => handleSearch()}>
                    <SearchIcon />
                  </IconButton>
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default SearchBar;
