import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function ComputerIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: dark ? '#fff' : '#4C5264',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon {...svgProps}>
      <g id="computer-icon" transform="translate(0 0)">
        <path
          {...commonProps}
          id="path"
          d="M21.6,14.5H1.4a.9.9,0,0,1-.9-.9V1.4A.9.9,0,0,1,1.4.5H21.5a.9.9,0,0,1,.9.9V13.5A.805.805,0,0,1,21.6,14.5Z"
        />
        <line
          {...commonProps}
          id="line"
          x2="3"
          strokeLinecap="round"
          transform="translate(10 16.5)"
        />
        <line
          {...commonProps}
          id="line-2"
          data-name="line"
          strokeLinecap="round"
          x2="7"
          transform="translate(8 18.5)"
        />
      </g>
    </SvgIcon>
  );
}

ComputerIcon.defaultProps = {
  dark: false,
};

ComputerIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};