import { Typography, TypographyProps } from "@mui/material";

import { ReactNode } from "react";

export type ITitleProps = TypographyProps<"h1"> & {
  children: ReactNode;
};

export function Title({ children, sx, ...rest }: ITitleProps) {
  const haveExclamation = typeof children === "string" && children.endsWith("!");

  return (
    <Typography variant="h5" component="h1" sx={{ mb: 2, ...sx }} {...rest}>
      {haveExclamation ? children.slice(0, -1) : children}
      <Typography variant="h4" component="span" color="primary">
        {haveExclamation ? "!" : "."}
      </Typography>
    </Typography>
  );
}
