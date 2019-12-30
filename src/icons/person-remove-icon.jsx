/** @jsx jsx **/
import { jsx } from '@emotion/core';

import { Icon } from '../icon';

export const PersonRemoveIcon = (svgProps) => {
  return (
    <Icon {...svgProps}>
      <rect width="24" height="24" opacity="0" />
      <path fill="currentColor" d="M21 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z" />
      <path
        fill="currentColor"
        d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"
      />
      <path
        fill="currentColor"
        d="M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"
      />
    </Icon>
  );
};
