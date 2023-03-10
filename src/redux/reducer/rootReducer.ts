import { combineReducers } from "redux";
import repositoryOptionsReducer from "./repositoryOptionsReducer";

const rootReducer = combineReducers({
  repositoryOptions: repositoryOptionsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
