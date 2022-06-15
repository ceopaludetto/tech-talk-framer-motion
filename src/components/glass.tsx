import { Paper } from "@mui/material";
import { motion } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";

const MotionPaper = motion(Paper);

export type IGlassProps = ComponentPropsWithoutRef<typeof MotionPaper> & {};

export function Glass({ children, className, sx, ...rest }: IGlassProps) {
  return (
    <MotionPaper sx={{ p: 3, borderRadius: 2, ...sx }} {...rest}>
      {children}
    </MotionPaper>
  );
}
