import Header from "./Header";
import { render, screen } from "@testing-library/react";
import store from "../../redux/store";

import { Provider } from "react-redux";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given a Header component", () => {
  describe("When is rendered", () => {
    test("Then it should render the github logo", () => {
      render(
        <Provider store={store}>
          <Header />
        </Provider>
      );

      const githubLogo = screen.getByAltText("github logo");

      expect(githubLogo).toBeTruthy();
    });
  });
});
