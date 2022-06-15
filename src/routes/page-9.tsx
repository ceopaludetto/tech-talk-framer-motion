import { Box, Typography } from "@mui/material";
import { Buttons, Code, Collapse, Example, Title } from "~/components";

import Code1 from "~/code/page-9/1.tsx?raw";
import { Component } from "~/code/page-9/1";

export default function Page9() {
  return (
    <Box sx={{ width: 800, maxWidth: "100%" }}>
      <Title>Animações de Layout</Title>
      <Typography>
        Framer motion consegue ser ainda mais mágico, ele é capaz de interpolar valores entre dois elementos diferentes
        da DOM, através da propriedade <i>layoutId</i>.
      </Typography>
      <Collapse delay={0.75}>
        <Code language="tsx">{Code1}</Code>
      </Collapse>
      <Typography sx={{ mt: 2 }}>Resultando:</Typography>
      <Collapse delay={1.5}>
        <Example>
          <Component />
        </Example>
      </Collapse>
      <Buttons prev="/8" next="/10" />
    </Box>
  );
}
