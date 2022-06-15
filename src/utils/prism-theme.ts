import { PrismTheme } from "prism-react-renderer";
import { Theme } from "@mui/material";

export function prismTheme(theme: Theme): PrismTheme {
  return {
    plain: {
      backgroundColor: (theme.palette.background as any).item,
      color: theme.palette.text.primary,
    },
    styles: [
      {
        types: ["prolog", "constant", "builtin"],
        style: {
          color: theme.palette.primary.main,
        },
      },
      {
        types: ["inserted", "function"],
        style: {
          color: theme.palette.primary.main,
        },
      },
      {
        types: ["deleted"],
        style: {
          color: theme.palette.error.main,
        },
      },
      {
        types: ["changed"],
        style: {
          color: theme.palette.warning.main,
        },
      },
      {
        types: ["punctuation", "symbol"],
        style: {
          color: theme.palette.secondary.main,
        },
      },
      {
        types: ["string", "char", "tag", "selector"],
        style: {
          color: theme.palette.primary.main,
        },
      },
      {
        types: ["keyword", "variable"],
        style: {
          color: theme.palette.secondary.main,
        },
      },
      {
        types: ["comment"],
        style: {
          color: theme.palette.text.secondary,
        },
      },
      {
        types: ["attr-name"],
        style: {
          color: theme.palette.warning.main,
        },
      },
    ],
  };
}
