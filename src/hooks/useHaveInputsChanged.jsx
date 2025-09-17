import { useEffect, useState } from "react";

export const useHaveInputsChanged = (current, initial) => {
  const [hasChanged, setHasChanged] = useState(false);
  useEffect(() => {
    if (current !== initial) {
      setHasChanged(true);
    } else setHasChanged(false);
  }, [current, initial])

  return hasChanged;
}
