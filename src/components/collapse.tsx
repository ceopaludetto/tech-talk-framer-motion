import { AnimatePresence, HTMLMotionProps, Variants, motion } from "framer-motion";

import { ReactNode } from "react";

export type ICollapseProps = HTMLMotionProps<"div"> & {
  delay: number;
  children: ReactNode;
};

const variants: Variants = {
  exit: { height: 0, opacity: 0 },
  enter: { height: "auto", opacity: 1 },
};

export function Collapse({ children, delay = 0.75, ...rest }: ICollapseProps) {
  return (
    <AnimatePresence initial>
      <motion.div
        variants={variants}
        initial="exit"
        animate="enter"
        transition={{ delay, easings: "easeInOut", delayChildren: 1, when: "beforeChildren" }}
        {...rest}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
