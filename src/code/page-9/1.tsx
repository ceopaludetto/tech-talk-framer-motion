import { ReactNode, useState } from "react";

import { motion } from "framer-motion";

function TabItem({ children, isSelected, onClick }: { children: ReactNode; isSelected: boolean; onClick: () => void }) {
  return (
    <div style={{ position: "relative", cursor: "pointer" }} onClick={onClick} role="button">
      {children}
      {isSelected && (
        <motion.div
          style={{ height: 2, width: "100%", backgroundColor: "cyan", position: "absolute", bottom: 0 }}
          layoutId="underline"
        />
      )}
    </div>
  );
}

export function Component() {
  const [selected, setSelected] = useState(0);

  return (
    <div style={{ display: "flex", columnGap: 8 }}>
      {Array.from({ length: 3 }, (v, k) => k).map((item) => (
        <TabItem onClick={() => setSelected(item)} isSelected={selected === item} key={item}>
          Tab {item + 1}
        </TabItem>
      ))}
      <TabItem onClick={() => setSelected(3)} isSelected={selected === 3}>
        Ultra-mega-long-tab-item-4
      </TabItem>
    </div>
  );
}
