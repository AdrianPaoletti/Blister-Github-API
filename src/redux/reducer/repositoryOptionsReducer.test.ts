import { repositoyOptionsMock } from "@/mocks/repositoryDataMock";
import actionTypes from "../actions/actionsTypes";
import repositoryOptionsReducer from "./repositoryOptionsReducer";

describe("Given a repositoryOptionsReducer", () => {
  describe("When it receives an initial value and a loadOptions action type", () => {
    test("Then it should return repositoryOptions data with the options data", () => {
      const newRepositoyOptions = repositoyOptionsMock;
      const action = {
        type: actionTypes.loadOptions,
        repositoryOptions: [...newRepositoyOptions],
      };

      const newState = repositoryOptionsReducer(
        [repositoyOptionsMock[0]],
        action
      );

      expect(newState).toEqual(newRepositoyOptions);
    });
  });
});
