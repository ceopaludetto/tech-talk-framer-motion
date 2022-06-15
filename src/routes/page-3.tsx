import { Box, Typography } from "@mui/material";
import { Buttons, Code, Collapse, Example, Title } from "~/components";
import { Variants, motion } from "framer-motion";

import Code1 from "~/code/page-3/1.tsx?raw";
import Code2 from "~/code/page-3/2.tsx?raw";

const variants: Variants = {
  exit: { opacity: 0 },
  enter: { opacity: 1 },
};

export default function Page3() {
  return (
    <Box sx={{ width: "800px", maxWidth: "100%" }}>
      <Title>Primeira Animação</Title>
      <Typography>
        Vamos começar nossa primeira animação, para isso, importe o componente <i>motion</i> da biblioteca:
      </Typography>
      <Collapse delay={0.75}>
        <Code language="tsx">{Code1}</Code>
      </Collapse>
      <Typography sx={{ mt: 2 }}>Depois adicione seus parâmetros:</Typography>
      <Collapse delay={1.5}>
        <Code language="tsx">{Code2.split("\n").slice(2).join("\n")}</Code>
      </Collapse>
      <Typography sx={{ mt: 2 }}>Resultando nesta animação:</Typography>
      <Collapse delay={2.25}>
        <Example>
          <motion.div transition={{ delay: 1 }} variants={variants}>
            I'm animated
          </motion.div>
        </Example>
      </Collapse>
      <Buttons prev="/2" next="/4" />
    </Box>
  );
}
