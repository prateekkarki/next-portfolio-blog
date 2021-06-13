import { useEffect } from 'react';

export default function useDisableBodyScroll(open) {
  useEffect(() => {
    if (document) {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }, [open]);
}
