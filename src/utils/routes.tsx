import { AnimatePresence, Variants, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import { Glass } from "~/components";

const modules = import.meta.globEager("~/routes/**/[a-z[]*.tsx");
const entries = Object.entries(modules);

const variants: Variants = {
  enter: {
    transition: {
      when: "beforeChildren",
      delayChildren: 0.5,
    },
  },
  exit: {
    transition: {
      when: "afterChildren",
    },
  },
};

const childVariants: Variants = {
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.key}>
        {entries.map(([key, module]) => {
          const path = key
            .replace(/\.\.\/routes|index|page\-|\.tsx$/g, "")
            .replace(/\[\.{3}.+\]/, "*")
            .replace(/\[(.+)\]/, ":$1");

          return (
            <Route
              key={key}
              element={
                <Glass
                  sx={{ maxWidth: "100%" }}
                  initial="exit"
                  animate="enter"
                  exit="exit"
                  layoutId="page"
                  variants={variants}
                >
                  <motion.div layout variants={childVariants}>
                    <module.default />
                  </motion.div>
                </Glass>
              }
              path={path}
            />
          );
        })}
      </Routes>
    </AnimatePresence>
  );
}
