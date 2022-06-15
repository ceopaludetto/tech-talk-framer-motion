import { motion } from "framer-motion";

export function Component() {
  return (
    <div style={{ height: 300, display: "flex", alignItems: "center", justifyContent: "space-around" }}>
      <motion.div drag style={{ backgroundColor: "tomato", width: 100, height: 100, borderRadius: "10%" }} />
      <motion.div
        drag
        dragConstraints={{ left: -300, right: 300, top: -150, bottom: 150 }}
        dragElastic={0.2}
        style={{ backgroundColor: "cyan", width: 100, height: 100, borderRadius: "10%" }}
      />
      <motion.div
        drag
        dragSnapToOrigin
        style={{ backgroundColor: "lightgreen", width: 100, height: 100, borderRadius: "10%" }}
      />
    </div>
  );
}
