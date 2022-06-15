import { Variants, motion } from "framer-motion";

import { useState } from "react";

const variants: Variants = {
  enter: { opacity: 1, x: 0 },
  exit: (from: "left" | "right") => ({ opacity: 0, x: 20 * (from === "left" ? -1 : 1) }),
};

export function Component() {
  const [from, setFrom] = useState<"left" | "right">("left");

  return (
    <>
      <button onClick={() => setFrom("left")}>from left</button>
      <button onClick={() => setFrom("right")}>from right</button>
      <motion.div variants={variants} custom={from} animate="enter" initial="exit">
        from {from}
      </motion.div>
    </>
  );
}
