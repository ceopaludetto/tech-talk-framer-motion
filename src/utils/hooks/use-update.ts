import { useCallback, useState } from "react";

import { generate } from "shortid";

export default function useUpdate() {
  const [key, setKey] = useState(() => generate());

  const handleUpdate = useCallback(() => {
    setKey(generate());
  }, []);

  return [key, handleUpdate] as const;
}
