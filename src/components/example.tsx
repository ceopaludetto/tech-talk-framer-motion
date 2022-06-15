import { Box, BoxProps, IconButton, Tooltip } from "@mui/material";
import { Children, Fragment } from "react";

import { AnimatePresence } from "framer-motion";
import { RefreshCw } from "lucide-react";
import useUpdate from "~/utils/hooks/use-update";

export type IExampleProps = BoxProps & {};

export function Example({ children, sx, ...rest }: IExampleProps) {
  const [key, update] = useUpdate();

  return (
    <Box
      sx={{
        mx: -3,
        mt: 2,
        py: 1,
        px: 3,
        backgroundColor: "background.item",
        position: "relative",
        "&:hover > .example-button": { opacity: 1 },
        ...sx,
      }}
      {...rest}
    >
      <AnimatePresence key={key} initial>
        {Children.count(children) > 1 ? <Fragment>{children}</Fragment> : children}
      </AnimatePresence>
      <Box className="example-button" sx={{ position: "absolute", right: 0, top: 0, pt: 0.9, pr: 0.9, opacity: 0 }}>
        <Tooltip describeChild title="Recarregar">
          <IconButton onClick={update} color="primary" size="small">
            <RefreshCw size={20} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
