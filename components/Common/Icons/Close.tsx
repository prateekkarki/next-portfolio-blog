import React, { type ReactElement } from 'react';

function Close(): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
    >
      <path
        fill="#D6E0E9"
        d="M14 .667a13.333 13.333 0 100 26.666A13.333 13.333 0 0014 .667zm3.613 15.053a1.333 1.333 0 010 1.893 1.335 1.335 0 01-1.893 0L14 15.88l-1.72 1.733a1.336 1.336 0 01-2.185-.433 1.333 1.333 0 01.292-1.46L12.12 14l-1.733-1.72a1.34 1.34 0 011.893-1.893L14 12.12l1.72-1.733a1.339 1.339 0 111.893 1.893L15.88 14l1.733 1.72z"
      />
    </svg>
  );
}

export default Close;
