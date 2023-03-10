import { useRouter } from "next/router";
import React, { useState } from "react";
import SearcherContext from "./SearcherContext";

interface SearcherContextProviderProps {
  children: JSX.Element;
}

const SearcherContextProvider = ({
  children,
}: SearcherContextProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const updateRouter = (queryParams: {
    name?: string;
    page?: number | string;
    sort?: string;
  }) => {
    router.push({
      pathname: "/",
      query: { ...router.query, ...queryParams },
    });
  };

  return (
    <SearcherContext.Provider
      value={{
        updateRouter,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </SearcherContext.Provider>
  );
};

export default SearcherContextProvider;
