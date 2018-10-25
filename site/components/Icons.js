import React from 'react';
import * as dusk from 'dusk-react';

const Icons = (props) => {
  const {
    bg, fg, fg2,
  } = props;

  const icons = [];

  Object.keys(dusk).forEach((icon) => {
    const name = icon
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());

    icons.push({
      svg: React.createElement(dusk[icon], {
        size: 100,
        bg: bg || '#1e1e1e',
        fg: fg || '#fff',
        fg2: fg2 || '#efefef',
      }),
      name,
    });
  });

  return icons;
};

export default Icons;
