// @ts-nocheck

export function Component() {
  return (
    <motion.div transition={{ delay: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      I'm animated.
    </motion.div>
  );
}
