import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../../redux/store";
import RepositoryCard from "./RepositoryCard";
import { repositoryMock } from "@/mocks/repositoryDataMock";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given a RepositoryCard component", () => {
  describe("When is rendered", () => {
    test("Then it should render a h2 heading with the text 'name' in it", () => {
      render(
        <Provider store={store}>
          <RepositoryCard repository={repositoryMock} />
        </Provider>
      );

      const repositoryName = screen.getByRole("heading");

      expect(repositoryName).toBeTruthy();
      expect(repositoryName.textContent).toContain(repositoryMock.name);
    });
  });
});
