import React from 'react';
import * as dusk from 'dusk-react';

const icons = [];
Object.keys(dusk).forEach((icon) => {
  const name = icon
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase());

  icons.push({
    svg: React.createElement(dusk[icon], {
      size: 100,
    }),
    name,
  });
});

export default icons;
