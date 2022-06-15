import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  PaletteMode,
  createTheme,
  responsiveFontSizes,
  useMediaQuery,
} from "@mui/material";
import { ReactNode, useEffect, useState } from "react";

function createApplicationTheme(colorScheme: PaletteMode) {
  const darkPalette = {
    mode: colorScheme,
    primary: {
      main: "#7dd3fc",
    },
    secondary: {
      main: "#f0abfc",
    },
    error: {
      main: "#fca5a5",
    },
    warning: {
      main: "#fde047",
    },
    background: {
      default: "rgb(15, 23, 42)",
      paper: "rgb(30, 41, 59)",
      item: "rgb(51, 65, 85)",
    },
  };

  const lightPalette = {
    mode: colorScheme,
    primary: {
      main: "#0284c7",
    },
    secondary: {
      main: "#c026d3",
    },
    error: {
      main: "#dc2626",
    },
    warning: {
      main: "#eab308",
    },
    background: {
      default: "rgb(203, 213, 225)",
      paper: "rgb(226, 232, 240)",
      item: "rgb(241, 245, 249)",
    },
  };

  const theme = createTheme({
    shape: { borderRadius: 6 },
    palette: colorScheme === "dark" ? darkPalette : lightPalette,
    typography: {
      fontFamily: "Poppins",
      body1: {
        lineHeight: 1.75,
      },
    },
    components: {
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            boxShadow: "inset 0 1px 0 0 rgb(255 255 255 / 5%)",
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: "none",
          },
          contained: {
            boxShadow: "inset 0 1px 0 0 rgb(255 255 255 / 5%)",
          },
        },
      },
    },
  });

  return responsiveFontSizes(theme);
}

export type IThemeProviderProps = {
  initialColorScheme: PaletteMode;
  children: ReactNode;
};

export function ThemeProvider({ initialColorScheme, children }: IThemeProviderProps) {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)", {
    defaultMatches: initialColorScheme === "dark",
  });

  const [theme, setTheme] = useState(() => createApplicationTheme(isDark ? "dark" : "light"));

  useEffect(() => {
    if (isDark) return setTheme(createApplicationTheme("dark"));
    return setTheme(createApplicationTheme("light"));
  }, [isDark]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
