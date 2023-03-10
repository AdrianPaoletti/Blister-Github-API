import { createTheme, Theme } from "@mui/material/styles";

export const defaultTheme: Theme = createTheme({
  typography: {
    fontFamily: "Mona Sans",
    fontSize: 17,
  },
  palette: { primary: { main: "#0969da" } },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          width: "40rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& > div.MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
            paddingRight: "1rem",

            "& button": {
              order: 3,
            },

            "& > div.MuiAutocomplete-endAdornment": {
              position: "relative",
              order: 2,
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "1.15rem",
          width: "10rem",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            background: "white",
            "&:hover": {
              background: "#c6cdd5",
            },
          },
        },
      },
    },
  },
});
