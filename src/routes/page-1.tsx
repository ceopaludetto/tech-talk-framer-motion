import { Box, Stack, Typography } from "@mui/material";
import { AlarmClock, Layers, Layout } from "lucide-react";
import { Buttons, Collapse, Logo, Title } from "~/components";

const features = [
  {
    name: "Variantes",
    icon: Layers,
  },
  {
    name: "Animações de layout",
    icon: Layout,
  },
  {
    name: "Ordenação de execução",
    icon: AlarmClock,
  },
];

export default function Page1() {
  return (
    <Box sx={{ width: "500px", maxWidth: "100%" }}>
      <Title>Features</Title>
      <Typography>
        A biblioteca conta com várias features interessantes que visam facilitar o desenvolvimento de animações
        complexas e dependentes umas das outras, tais como:
      </Typography>
      <Stack direction="column" spacing={2} sx={{ mt: 2, textAlign: "center" }}>
        {features.map((feature, i) => (
          <Collapse key={feature.name} delay={(i + 1) * 0.75}>
            <Box sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
              <Logo>
                <feature.icon />
              </Logo>
              <Typography>
                {feature.name}
                <Typography color="primary" component="span">
                  {i === features.length - 1 ? "." : ";"}
                </Typography>
              </Typography>
            </Box>
          </Collapse>
        ))}
      </Stack>
      <Buttons prev="/" next="/2" />
    </Box>
  );
}
