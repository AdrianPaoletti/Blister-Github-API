import { RepositoryOptions } from "@/models/repository";
import { LoadRepositoryOptionAction } from "../actions/actionsCreator";
import actionTypes from "../actions/actionsTypes";

const repositoryOptionsReducer = (
  repositoryOptions: RepositoryOptions[] = [{ name: "", id: 0 }],
  action: LoadRepositoryOptionAction
): RepositoryOptions[] => {
  let newRepositoryOptions;
  switch (action.type) {
    case actionTypes.loadOptions:
      newRepositoryOptions = [...action.repositoryOptions];
      break;
    default:
      newRepositoryOptions = repositoryOptions;
  }
  return newRepositoryOptions;
};

export default repositoryOptionsReducer;
