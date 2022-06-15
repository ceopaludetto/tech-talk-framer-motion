import { AnimatePresence, Variants, motion } from "framer-motion";

import { useState } from "react";

const variants: Variants = {
  enter: { opacity: 1, height: "auto", transition: { duration: 1 } },
  exit: { opacity: 0, height: 0, transition: { duration: 1 } },
};

function Box({ color }: { color: string }) {
  return (
    <motion.div
      style={{ backgroundColor: color, width: 200 }}
      variants={variants}
      animate="enter"
      initial="exit"
      exit="exit"
    >
      <br />
      <br />
      <br />
    </motion.div>
  );
}

export function Component() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)}>{open ? "Fechar" : "Abrir"}</button>
      <div style={{ display: "flex", columnGap: 8 }}>
        <AnimatePresence>{open && <Box color="green" />}</AnimatePresence>
        {open && <Box color="red" />}
      </div>
    </>
  );
}
