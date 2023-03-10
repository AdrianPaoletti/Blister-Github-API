import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import store from "../../redux/store";
import mockRouter from "next-router-mock";

import Header from "./Header";
import SearcherContext from "@/store/context/SearcherContext";

jest.mock("next/router", () => require("next-router-mock"));
const updateRouter = jest.fn();
const isLoading = false;
const setIsLoading = jest.fn();

describe("Given a Header component", () => {
  describe("When is rendered", () => {
    test("Then it should render the github logo", () => {
      render(
        <SearcherContext.Provider
          value={{ updateRouter, isLoading, setIsLoading }}
        >
          <Provider store={store}>
            <Header />
          </Provider>
        </SearcherContext.Provider>
      );

      const githubLogo = screen.getByAltText("github logo");

      expect(githubLogo).toBeTruthy();
    });
  });

  describe("When is rendered and interactions are made", () => {
    test("Then it should call updateRouter function after updating the input's sort value", () => {
      mockRouter.push("/?name=sar");
      const { container } = render(
        <SearcherContext.Provider
          value={{ updateRouter, isLoading, setIsLoading }}
        >
          <Provider store={store}>
            <Header />
          </Provider>
        </SearcherContext.Provider>
      );

      const buttonSort = screen.getAllByRole("button")[1];
      fireEvent.click(buttonSort);
      const inputValue = container.getElementsByClassName(
        "MuiSelect-nativeInput"
      )[0];
      fireEvent.change(inputValue, { target: { value: "updated" } });

      expect(updateRouter).toHaveBeenCalled();
    });
  });
});
