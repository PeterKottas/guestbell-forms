import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3CA5D8",
      contrastText: "#fff",
    },
    text: {
      primary: "#342953",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: { position: "absolute", top: "calc(100% - 2px)", right: 0 },
      },
    },
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        code: {
          fontFamily: "monospace",
          // color: theme.palette.primary.main,
          backgroundColor: theme.palette.grey[200],
          padding: 3,
          borderRadius: 5,
        },
      }),
    },
  },
});
