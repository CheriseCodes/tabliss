import React, { FC } from 'react';

import { WidgetDisplay } from '../../store/reducers/types';

const Widget: FC<WidgetDisplay> = ({
  children,
  colour,
  fontFamily,
  fontSize = 24,
  fontWeight,
  backgroundOpacity,
  backgroundColour,
  backgroundRadius
}) => (
  <div
    className={`Widget ${fontWeight ? 'weight-override' : ''}`}
    style={{
      color: colour,
      fontFamily,
      fontSize: `${fontSize}px`,
      fontWeight,
      borderRadius: `${backgroundRadius}px`,
      backgroundColor: backgroundColour + ((undefined === backgroundOpacity) ? "" : backgroundOpacity.toString(16))
    }}
  >
    {children}
  </div>
);

export default Widget;
