import { Repository, RepositoryOptions } from "@/models/repository";
import axios from "axios";
import { Dispatch } from "react";
import { ActionTypes } from "../actions/actionsTypes";

import { loadRepositoryOptionAction } from "../actions/actionsCreator";
import { removeDuplicates } from "@/utils/removeDuplicates";
import { sortAlphabetically } from "@/utils/sortAlphabetically";

interface LoadRepositoryOptions {
  type: ActionTypes["loadOptions"];
  repositoryOptions: RepositoryOptions[];
}

const urlApi = "https://api.github.com/search/repositories";

export const loadRepositoryOptionsThunk = (searchTerm: string) => {
  return async (dispatch: Dispatch<LoadRepositoryOptions>) => {
    try {
      const repositoryOptions = await axios.get(urlApi, {
        params: { q: searchTerm, per_page: 15 },
      });
      if (repositoryOptions.status === 200) {
        const repositories = repositoryOptions.data.items;
        const uniqueRepositories = removeDuplicates(repositories, "name");
        const sortedRepositories = sortAlphabetically(uniqueRepositories);
        const repositoryNames: RepositoryOptions[] = sortedRepositories.map(
          ({ name, id }: Repository) => ({
            name,
            id,
          })
        );
        dispatch(loadRepositoryOptionAction(repositoryNames));
      }
    } catch (error) {
      return error;
    }
  };
};
