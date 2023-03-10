import { NextRouter } from "next/router";
import { createContext } from "react";

interface SearcherCreateContext {
  updateRouter: (
    router: NextRouter,
    queryParams: {
      name?: string;
      page?: number | string;
    }
  ) => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearcherContext = createContext<SearcherCreateContext | any>(
  {} as SearcherCreateContext
);
SearcherContext.displayName = "Searcher Context";

export default SearcherContext;
