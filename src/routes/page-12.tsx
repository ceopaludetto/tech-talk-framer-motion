import { Box, Typography } from "@mui/material";
import { Buttons, Code, Collapse, Title } from "~/components";

import Code1 from "~/code/page-12/1.tsx?raw";
import Code2 from "~/code/page-12/2.tsx?raw";

export default function Page12() {
  return (
    <Box sx={{ width: 600, maxWidth: "100%" }}>
      <Title>Bônus</Title>
      <Typography>
        Sabemos que tudo que é mágico, costuma custar caro. No mundo do desenvolvimento web, isso não é diferente,
        framer motion é uma biblioteca enorme, porém, ela disponibiliza uma maneira de carregar dinamicamente suas
        features e permite selecionar apenas as que serão utilizadas. Veja:
      </Typography>
      <Collapse delay={0.75}>
        <Code language="tsx">{Code1}</Code>
      </Collapse>
      <Typography sx={{ mt: 2 }}>
        O que fazemos no código acima, essencialmente, é exportar apenas as features que desejamos utilizar nas
        animações, neste caso as possibilidades são{" "}
        <Typography component="i" color="secondary">
          domMax
        </Typography>{" "}
        e{" "}
        <Typography component="i" color="secondary">
          domAnimation
        </Typography>
        . Para mostrar ao Framer Motion como carregar essas features você deve colocar o seguinte provider ao redor de
        sua aplicação:
      </Typography>
      <Collapse delay={1.5}>
        <Code language="tsx">{Code2.split("\n").slice(2).join("\n")}</Code>
      </Collapse>
      <Typography sx={{ mt: 2 }}>
        É necessário denotar a importação <i>m</i> ao invés de <i>motion</i>, dessa forma, framer sabe que não deve
        importar suas features assim que <i>motion</i> fosse importado, garantindo o <i>tree-shaking</i>. A propriedade{" "}
        <Typography component="i" color="secondary">
          strict
        </Typography>{" "}
        é bastante útil também, já que ela é responsável por disparar um erro caso você utilize <i>motion</i> ao invés
        de <i>m</i>.
      </Typography>
      <Buttons prev="/11" next="/13" />
    </Box>
  );
}
