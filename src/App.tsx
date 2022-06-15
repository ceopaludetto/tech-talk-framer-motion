import { Box } from "@mui/material";
import { AnimatedRoutes } from "~/utils/routes";

export function App() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", p: 2 }}>
      <AnimatedRoutes />
    </Box>
  );
}
