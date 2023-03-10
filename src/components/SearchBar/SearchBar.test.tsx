import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import mockRouter from "next-router-mock";

import store from "../../redux/store";
import SearcherContext from "@/store/context/SearcherContext";
import SearchBar from "./SearchBar";

jest.mock("next/router", () => require("next-router-mock"));
const updateRouter = jest.fn();
const isLoading = false;
const setIsLoading = jest.fn();

describe("Given a SearchBar component", () => {
  describe("When is rendered and interactions are made", () => {
    beforeEach(() => {
      mockRouter.push("/?page=1");
      render(
        <SearcherContext.Provider
          value={{ updateRouter, isLoading, setIsLoading }}
        >
          <Provider store={store}>
            <SearchBar />
          </Provider>
        </SearcherContext.Provider>
      );
    });

    test("Then it should render the repositoryOptions after firing the input's change event", async () => {
      const input = screen.getByRole("combobox");

      fireEvent.change(input, { target: { value: "alpha" } });
      const repositoryOption = screen.getByRole("option");

      expect(repositoryOption).toBeTruthy();
    });

    test("Then it should call the updateRouter function after firing the keydown event with the 'Enter' key", async () => {
      const input = screen.getByRole("combobox");

      fireEvent.change(input, { target: { value: "alpha" } });
      fireEvent.keyDown(input, {
        key: "Enter",
        charCode: 13,
        code: "Enter",
      });

      expect(updateRouter).toHaveBeenCalled();
    });
  });
});
