declare module 'react-scroll-up' {
  import * as React from 'react';

  export interface ScrollToTopProps {
    showUnder?: number;
    duration?: number;
    style?: React.CSSProperties;
    children?: React.ReactNode; // add children
  }
  const ScrollToTop: React.ComponentType<ScrollToTopProps>;
  export default ScrollToTop;
}
