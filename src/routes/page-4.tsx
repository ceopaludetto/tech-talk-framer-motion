import { Box, Typography } from "@mui/material";
import { Buttons, Code, Collapse, Example, Title } from "~/components";
import { Variants, motion } from "framer-motion";

import Code1 from "~/code/page-4/1.tsx?raw";

const variants: Variants = {
  exit: { opacity: 0 },
  enter: { opacity: 1 },
};

export default function Page4() {
  return (
    <Box sx={{ width: "800px", maxWidth: "100%" }}>
      <Title>Variantes</Title>
      <Typography>
        Variantes são uma forma dinâmica e mais organizada de atribuir as animações ao componente, veja como seria a
        animação do exemplo anterior fazendo uso das variantes.
      </Typography>
      <Collapse delay={0.75}>
        <Code language="tsx">{Code1}</Code>
      </Collapse>
      <Typography sx={{ mt: 2 }}>Obtendo o mesmo resultado:</Typography>
      <Collapse delay={1.5}>
        <Example>
          <motion.div transition={{ delay: 1 }} variants={variants}>
            I'm animated with variants
          </motion.div>
        </Example>
      </Collapse>
      <Buttons prev="/3" next="/5" />
    </Box>
  );
}
