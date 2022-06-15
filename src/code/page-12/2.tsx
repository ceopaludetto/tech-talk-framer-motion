// @ts-nocheck

// app.tsx
import { LazyMotion, m as motion } from "framer-motion";

const loadFeatures = () => import("./features.ts").then((module) => module.default);

export function App() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <motion.div>animação</motion.div>
    </LazyMotion>
  );
}
