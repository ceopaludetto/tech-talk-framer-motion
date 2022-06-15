import { Box, Typography } from "@mui/material";
import { Buttons, Code, Collapse, Example, Title } from "~/components";

import Code1 from "~/code/page-8/1.tsx?raw";
import { Component } from "~/code/page-8/1";

export default function Page8() {
  return (
    <Box sx={{ width: 800, maxWidth: "100%" }}>
      <Title>Animações de Layout</Title>
      <Typography>
        Se eu fosse eleger um motivo para usar Framer Motion, com certeza seria as animações de layout. Não existe nada
        mais "mágico", a primeira vista, do que a propiedade <i>layout</i> que essa bilbioteca oferece. E como já dizia
        o escritor britânico, Arthur C. Clarke:
      </Typography>
      <Typography component="q" color="secondary" sx={{ my: 2, display: "inline-block" }}>
        Qualquer tecnologia suficientemente avançada é indistinguível da magia.
      </Typography>
      <Typography>
        A propriedade <i>layout</i> é capaz de automágicamente animar mudanças de tamanho e posicionamento de um
        determinado elemento, pela alteração de estilo que ocorre nele e em seus filhos.
      </Typography>
      <Collapse delay={0.75}>
        <Code language="tsx">{Code1}</Code>
      </Collapse>
      <Typography sx={{ mt: 2 }}>Gerando:</Typography>
      <Collapse delay={1.5}>
        <Example>
          <Component />
        </Example>
      </Collapse>
      <Buttons prev="/7" next="/9" />
    </Box>
  );
}
