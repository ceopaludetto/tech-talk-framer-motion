import { Variants, motion } from "framer-motion";

const variants: Variants = {
  exit: { opacity: 0 },
  enter: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const childVariants: Variants = {
  exit: { opacity: 0, y: "-10px" },
  enter: { opacity: 1, y: 0 },
};

export function Component() {
  return (
    <motion.div
      style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
      variants={variants}
      animate="enter"
      initial="exit"
    >
      {Array.from({ length: 10 }, (v, k) => k).map((item) => (
        <motion.div style={{ marginRight: 4 }} variants={childVariants}>
          Child {item + 1}
        </motion.div>
      ))}
    </motion.div>
  );
}
