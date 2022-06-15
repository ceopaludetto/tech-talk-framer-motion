import { Box, useTheme } from "@mui/material";
import { Buttons, Title } from "~/components";
import { Variants, motion } from "framer-motion";

import FolksImage from "~/assets/folks.jpeg";
import { useState } from "react";

const variants: Variants = {
  enter: { opacity: 1, height: "auto", transition: { delay: 1, easings: "easeInOut" } },
  exit: { opacity: 0, height: 0 },
};

export default function Page12() {
  const theme = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box sx={{ width: 1000, maxWidth: "100%" }}>
      <Title>That's all folks!</Title>
      <motion.img
        variants={variants}
        animate={imageLoaded ? "enter" : "exit"}
        style={{ width: "100%", objectFit: "cover", borderRadius: theme.shape.borderRadius }}
        src={FolksImage}
        onLoad={() => setImageLoaded(true)}
      />
      <Buttons prev="/12" />
    </Box>
  );
}
