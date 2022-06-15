import { Box, Typography } from "@mui/material";
import { Buttons, Code, Collapse, Example, Title } from "~/components";
import { Variants, motion } from "framer-motion";

import Code1 from "~/code/page-6/1.tsx?raw";
import { Component } from "~/code/page-6/1";
import { useState } from "react";

const variants: Variants = {
  enter: { opacity: 1, x: 0 },
  exit: (from: "left" | "right") => ({ opacity: 0, x: 20 * (from === "left" ? -1 : 1) }),
};

export default function Page6() {
  const [from, setFrom] = useState<"left" | "right">("left");

  return (
    <Box sx={{ width: 800, maxWidth: "100%" }}>
      <Title>Variantes</Title>
      <Typography>
        Variantes também conseguem receber valores customizados. Neste exemplo, vamos fazer uma animação iniciar de um
        lado diferente baseado no state do componente, veja:
      </Typography>
      <Collapse delay={0.75}>
        <Code language="tsx">{Code1}</Code>
      </Collapse>
      <Typography sx={{ mt: 2 }}>Resultando nesta animação:</Typography>
      <Collapse delay={1.5}>
        <Example>
          <button onClick={() => setFrom("left")}>from left</button>
          <button onClick={() => setFrom("right")}>from right</button>
          <motion.div variants={variants} custom={from}>
            from {from}
          </motion.div>
        </Example>
      </Collapse>
      <Buttons prev="/5" next="/7" />
    </Box>
  );
}
