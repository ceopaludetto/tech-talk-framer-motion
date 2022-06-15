import { Variants, motion } from "framer-motion";

const variants: Variants = {
  enter: { opacity: 1, transition: { delay: 1 } },
  initial: { opacity: 0, transition: { delay: 1 } },
};

export function Component() {
  return (
    <motion.div variants={variants} animate="enter" initial="initial">
      I'm animated with variants
    </motion.div>
  );
}
