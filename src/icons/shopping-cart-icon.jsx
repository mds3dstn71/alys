/** @jsx jsx **/
import { jsx } from '@emotion/core';

import { Icon } from '../icon';

export const ShoppingCartIcon = (svgProps) => {
  return (
    <Icon {...svgProps}>
      <rect width="24" height="24" opacity="0" />
      <path
        fill="currentColor"
        d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z"
      />
      <circle fill="currentColor" cx="7.5" cy="19.5" r="1.5" />
      <circle fill="currentColor" cx="17.5" cy="19.5" r="1.5" />
    </Icon>
  );
};
