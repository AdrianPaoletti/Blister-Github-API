import { RepositoryOptions } from "@/models/repository";
import actionTypes from "./actionsTypes";

export interface LoadRepositoryOptionAction {
  repositoryOptions: RepositoryOptions[];
  type: string;
}

export const loadRepositoryOptionAction = (
  repositoryOptions: RepositoryOptions[]
): LoadRepositoryOptionAction => ({
  type: actionTypes.loadOptions,
  repositoryOptions,
});
