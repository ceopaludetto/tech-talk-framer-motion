import { Box, Typography } from "@mui/material";
import { Buttons, Code, Collapse, Title } from "~/components";
import Code1 from "~/code/page-2/1.sh?raw";

export default function Page2() {
  return (
    <Box sx={{ width: "800px", maxWidth: "100%" }}>
      <Title>Instalação</Title>
      <Typography>
        Para começar a utilizar a biblioteca é necessário instalá-la com seu gerenciador de pacotes favorito.
      </Typography>
      <Collapse delay={0.75}>
        <Code language="bash">{Code1}</Code>
      </Collapse>
      <Buttons prev="/1" next="/3" />
    </Box>
  );
}
