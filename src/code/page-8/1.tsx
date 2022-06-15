import { motion } from "framer-motion";
import { random } from "~/utils/random";
import { useState } from "react";

export function Component() {
  const [size, setSize] = useState(() => random(20, 300));

  return (
    <>
      <button onClick={() => setSize(random(20, 300))}>random size</button>
      <div style={{ display: "flex", height: 300, alignItems: "center", justifyContent: "center" }}>
        <motion.div style={{ backgroundColor: "tomato", borderRadius: 6 }} layout>
          <div style={{ width: size, height: size }}></div>
        </motion.div>
      </div>
    </>
  );
}
