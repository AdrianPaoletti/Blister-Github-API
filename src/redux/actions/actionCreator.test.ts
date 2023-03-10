import { repositoyOptionsMock } from "@/mocks/repositoryDataMock";
import {
  LoadRepositoryOptionAction,
  loadRepositoryOptionAction,
} from "./actionsCreator";
import actionTypes from "./actionsTypes";

describe("Given a loadRepositoryOptionAction", () => {
  describe("When it is called", () => {
    test("Then it should return an object with a loadOptions action type and the repositoyOptions data", () => {
      const expectedAction: LoadRepositoryOptionAction = {
        type: actionTypes.loadOptions,
        repositoryOptions: repositoyOptionsMock,
      };

      const actionResult = loadRepositoryOptionAction(repositoyOptionsMock);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
