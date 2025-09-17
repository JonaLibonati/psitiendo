import { useRef, useEffect } from 'react';

export const useEffectAfterMonting = (triggers, callback) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (!Array.isArray(triggers)) return;

    if (didMount.current && typeof callback === 'function') {
      callback();
    } else {
      didMount.current = true;
    }
  }, triggers);
};