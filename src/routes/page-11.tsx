import { Box, Typography } from "@mui/material";
import { Buttons, Code, Collapse, Example, Title } from "~/components";

import Code1 from "~/code/page-11/1.tsx?raw";
import { Component } from "~/code/page-11/1";

export default function Page11() {
  return (
    <Box sx={{ width: 600, maxWidth: "100%" }}>
      <Title>Gestos</Title>
      <Typography>Framer motion também é capaz de fazer animações através de gestos.</Typography>
      <Collapse delay={0.75}>
        <Code language="tsx">{Code1}</Code>
      </Collapse>
      <Typography sx={{ mt: 2 }}>Resultando:</Typography>
      <Collapse delay={1.5}>
        <Example>
          <Component />
        </Example>
      </Collapse>
      <Buttons prev="/10" next="/12" />
    </Box>
  );
}
