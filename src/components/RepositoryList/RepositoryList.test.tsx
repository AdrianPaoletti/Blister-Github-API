import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import mockRouter from "next-router-mock";

import store from "../../redux/store";
import RepositoryList from "./RepositoryList";
import { repositoryMock } from "@/mocks/repositoryDataMock";
import SearcherContext from "@/store/context/SearcherContext";

jest.mock("next/router", () => require("next-router-mock"));
const updateRouter = jest.fn();
const isLoading = false;
const setIsLoading = jest.fn();

describe("Given a RepositoryList component", () => {
  describe("When is rendered and interactions are made", () => {
    test("Then it should call 'updateRouter' after firing the button's event", () => {
      mockRouter.push("/?page=1");
      render(
        <SearcherContext.Provider
          value={{ updateRouter, isLoading, setIsLoading }}
        >
          <Provider store={store}>
            <RepositoryList repositories={[repositoryMock]} totalPages={2} />
          </Provider>
        </SearcherContext.Provider>
      );
      const nextButton = screen.getAllByRole("button")[2];

      fireEvent.click(nextButton);

      expect(updateRouter).toHaveBeenCalled();
    });
  });

  describe("When is rendered without repositories", () => {
    test("Then the component should contain 'No repositories' text", () => {
      render(
        <SearcherContext.Provider
          value={{ updateRouter, isLoading, setIsLoading }}
        >
          <Provider store={store}>
            <RepositoryList repositories={[]} totalPages={2} />
          </Provider>
        </SearcherContext.Provider>
      );

      const h3HtmlTag = screen.getAllByRole("heading")[1];

      expect(h3HtmlTag.textContent).toContain("No repositories");
    });
  });
});
