import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function ChevronUpIcon({ dark, thick, color, ...svgProps }) {
  return (
    <SvgIcon viewBox="0 0 11.7 6.8" {...svgProps}>
      <g id="up-arrow-icon" transform="translate(238.2 110.25) rotate(180)">
        <path
          id="path"
          d="M.5,10.2,5.3,5.3.5.5"
          transform="translate(237.7 103.95) rotate(90)"
          fill="none"
          stroke={iconDark(
            dark,
            COLOR_WHITE,
            color ? colors[color] : 'currentColor',
          )}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={thick ? 2 : undefined}
        />
      </g>
    </SvgIcon>
  );
}

ChevronUpIcon.defaultProps = {
  dark: false,
  thick: false,
};

ChevronUpIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Set to `true` to make icon thicker */
  thick: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};