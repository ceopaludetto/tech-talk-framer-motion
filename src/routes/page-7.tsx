import { Box, Typography } from "@mui/material";
import { Buttons, Code, Collapse, Example, Title } from "~/components";

import Code1 from "~/code/page-7/1.tsx?raw";
import { Component } from "~/code/page-7/1";

export default function Page7() {
  return (
    <Box sx={{ width: 1000, maxWidth: "100%" }}>
      <Title>Presença de animação</Title>
      <Typography>
        Algumas vezes, queremos animar não só a entrada do elemento na árvore como sua saída também. Framer motion torna
        isso tão fácil quanto revisar uma PR de troca de label.
      </Typography>
      <Collapse delay={0.75}>
        <Code language="tsx">{Code1}</Code>
      </Collapse>
      <Typography sx={{ mt: 2 }}>
        Note que, ao adicionar o <i>AnimatePresence</i> em volta do elemento já é suficiente para que a animação de exit
        funcione corretamente.
      </Typography>
      <Collapse delay={1.5}>
        <Example>
          <Component />
        </Example>
      </Collapse>
      <Typography sx={{ mt: 2 }}>
        Um conceito interessante apresentado nesse exemplo também, é a capacidade de interpolar valores que não são
        comumente interpolados no css, como por exemplo o height: 0 para o height: auto.
      </Typography>
      <Buttons prev="/6" next="/8" />
    </Box>
  );
}
