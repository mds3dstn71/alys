/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

export const IconShowcase = ({ icons }) => {
  const theme = useTheme().default;

  return (
    <div
      css={{
        color: theme.color.textSubtle,
        fontFamily: theme.typography.fonts.base,
        fontSize: theme.typography.size.s1,
      }}
    >
      <input disabled placeholder={`Search ${Object.keys(icons).length} icons`} />

      <ul
        css={{
          display: 'flex',
          flexFlow: 'row wrap',
          listStyle: 'none',
          fontFamily: theme.typography.fonts.code,
          justifyContent: 'center',
          padding: 0,
        }}
      >
        {Object.entries(icons).map(([key, Icon]) => (
          <li
            css={{
              display: 'inline-flex',
              flexDirection: 'row',
              alignItems: 'center',
              flex: '0 1 20%',
              minWidth: 120,
              padding: '0 7.5px 20px',
              transition: `color 0.2s ${theme.easing.rubber}`,
              cursor: 'default',

              '&:hover': {
                color: theme.color.description,
              },
            }}
            key={key}
            data-icon-name={key}
          >
            <Icon
              css={{
                marginRight: 10,
              }}
              aria-hidden
              width={24}
              height={24}
            />

            <span title={key}>{key.length > 21 ? key.substring(0, 18) + '...' : key}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

IconShowcase.propTypes = {
  icons: PropTypes.objectOf(PropTypes.node).isRequired,
};
