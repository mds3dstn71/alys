/** @jsx jsx **/
import { jsx } from '@emotion/core';

import { Icon } from '../icon';

export const Options2Icon = (svgProps) => {
  return (
    <Icon {...svgProps}>
      <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />
      <path
        fill="currentColor"
        d="M19 9a3 3 0 0 0-2.82 2H3a1 1 0 0 0 0 2h13.18A3 3 0 1 0 19 9zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"
      />
      <path
        fill="currentColor"
        d="M3 7h1.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2H9.82a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2zm4-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
      />
      <path
        fill="currentColor"
        d="M21 17h-7.18a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2h5.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2zm-10 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"
      />
    </Icon>
  );
};
