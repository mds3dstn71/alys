import React from 'react';
import Avatar from 'alys/Avatar';

import img from '../../docs/assets/alys.jpg';

/** Small and rounded avatar */
export default function ExampleSmallRound() {
  return <Avatar src={img} size="small" round />;
}