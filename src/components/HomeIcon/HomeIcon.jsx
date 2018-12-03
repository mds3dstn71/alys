import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function HomeIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: dark ? '#fff' : '#4C5264',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon {...svgProps}>
      <g id="home-icon" transform="translate(0 0)">
        <path {...commonProps} id="path" d="M17.5,8.1h2.4L10.2.5.5,8.1h2" />
        <path {...commonProps} id="path-2" data-name="path" d="M17.5,7.1" />
        <path {...commonProps} id="path-3" data-name="path" d="M2.5,8.1" />
        <path
          {...commonProps}
          id="path-4"
          data-name="path"
          d="M2.5,8.1v11h6v-6h3v6h6V8.1"
        />
      </g>
    </SvgIcon>
  );
}

HomeIcon.defaultProps = { dark: false };

HomeIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};