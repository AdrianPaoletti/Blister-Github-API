import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";

import SearcherContextProvider from "@/store/context/SearcherContextProvider";
import { defaultTheme } from "../styles/themes/index";
import "@/styles/globals.scss";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearcherContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </SearcherContextProvider>
  );
}
