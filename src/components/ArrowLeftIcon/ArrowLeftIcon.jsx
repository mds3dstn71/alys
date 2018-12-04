import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function ArrowLeftIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark, COLOR_WHITE, colors[color]),
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 19 17.2" {...svgProps}>
      <g id="arrow-left-icon" transform="translate(0 0)">
        <line
          {...commonProps}
          id="line"
          x1="17"
          transform="translate(1.5 8.6)"
        />
        <path
          {...commonProps}
          id="path"
          strokeLinejoin="round"
          d="M8.6.5.5,8.6l8.1,8.1"
        />
      </g>
    </SvgIcon>
  );
}

ArrowLeftIcon.defaultProps = {
  dark: false,
  color: 'dark',
};

ArrowLeftIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
