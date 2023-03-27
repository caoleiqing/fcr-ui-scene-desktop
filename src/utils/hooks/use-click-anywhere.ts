import { useEffect, useRef } from 'react';
import { clickAnywhere } from '../';
export const useClickAnywhere = (cb: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      return clickAnywhere(ref.current, cb);
    }
  }, []);

  return ref;
};
