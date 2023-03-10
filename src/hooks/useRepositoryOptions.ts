import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "@/redux/reducer/rootReducer";
import { loadRepositoryOptionsThunk } from "@/redux/thunks/repositoryThunk";

const useRepositoryOptions = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const repositoryOptions = useSelector(
    (state: AppState) => state.repositoryOptions
  );

  const loadRepositoryOptions = (searchTerm: string) =>
    dispatch(loadRepositoryOptionsThunk(searchTerm));

  return {
    repositoryOptions,
    loadRepositoryOptions,
  };
};

export default useRepositoryOptions;
