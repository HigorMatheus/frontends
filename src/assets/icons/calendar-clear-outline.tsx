import React, { ReactNode } from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

function Calendar(props: SvgProps) {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5.86633 4.88861H25.4207C27.0407 4.88861 28.3539 6.20183 28.3539 7.82177V25.4207C28.3539 27.0407 27.0407 28.3539 25.4207 28.3539H5.86633C4.24639 28.3539 2.93316 27.0407 2.93316 25.4207V7.82177C2.93316 6.20183 4.24639 4.88861 5.86633 4.88861Z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <Path
        d="M2.93316 9.77721H28.3539M23.4653 2.93317V4.88861V2.93317ZM7.82177 2.93317V4.88861V2.93317Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export default Calendar;
