import { Box, Typography } from "@mui/material";
import { Buttons, Code, Collapse, Example, Title } from "~/components";
import { Variants, motion } from "framer-motion";

import Code1 from "~/code/page-5/1.tsx?raw";

const variants: Variants = {
  exit: { opacity: 0 },
  enter: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const childVariants: Variants = {
  exit: { opacity: 0, y: "-10px" },
  enter: { opacity: 1, y: 0 },
};

export default function Page5() {
  return (
    <Box sx={{ width: 800, maxWidth: "100%" }}>
      <Title>Variantes</Title>
      <Typography>
        Variantes também são úteis durante a propagação de animações entre os filhos e sua ordem de execução, veja:
      </Typography>
      <Collapse delay={0.75}>
        <Code language="tsx">{Code1}</Code>
      </Collapse>
      <Typography sx={{ mt: 2 }}>Resultando na seguinte animação:</Typography>
      <Collapse delay={1.5}>
        <Example>
          <motion.div
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap", columnGap: 8 }}
            variants={variants}
          >
            {Array.from({ length: 10 }, (v, k) => k).map((item) => (
              <motion.div key={item} variants={childVariants}>
                Child {item + 1}
              </motion.div>
            ))}
          </motion.div>
        </Example>
      </Collapse>
      <Buttons prev="/4" next="/6" />
    </Box>
  );
}
