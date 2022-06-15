import { motion } from "framer-motion";

export function Component() {
  return (
    <div style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <motion.div
        whileHover={{ rotateZ: 30, scale: 0.7 }}
        whileTap={{ borderRadius: "50%", rotateZ: -90, scale: 1.3 }}
        style={{ backgroundColor: "tomato", width: 100, height: 100, borderRadius: "10%" }}
      />
    </div>
  );
}
