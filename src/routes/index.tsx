import { Box, Link, Typography } from "@mui/material";
import { Buttons, Logo } from "~/components";

import { ReactComponent as FramerLogo } from "~/assets/logo.svg";

export default function PageIndex() {
  return (
    <Box sx={{ width: 600, maxWidth: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "flex-start" },
          gap: 2,
          mb: 2,
          flexWrap: "wrap",
        }}
      >
        <Logo>
          <FramerLogo width={35} />
        </Logo>
        <Box sx={{ flex: { xs: "0 0 100%", sm: "1" }, textAlign: { xs: "center", sm: "left" } }}>
          <Typography variant="h4" component="h1">
            Framer Motion
          </Typography>
          <Typography variant="h6" color="primary" component="h2">
            Por Carlos Eduardo
          </Typography>
        </Box>
      </Box>
      <Typography>
        Hoje irei apresentar o{" "}
        <Link href="https://www.framer.com/motion/" rel="noopener noreferrer" target="_blank">
          Framer Motion
        </Link>
        , uma biblioteca <i>production-ready</i> que trás animações declarativas com fácil implementação e manutenção.
      </Typography>
      <Buttons next="/1" />
    </Box>
  );
}
