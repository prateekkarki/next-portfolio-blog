import 'twin.macro';
import { css as cssImport, CSSProp } from '@emotion/react';
import styledImport from '@emotion/styled';

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module 'react' {
  // The tw and css prop
  interface DOMAttributes<T> {
    tw?: string;
    css?: CSSProp;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      tw?: string;
      css?: CSSProp;
    }
  }
}
