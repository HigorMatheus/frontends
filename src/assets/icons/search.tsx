/* eslint-disable react/function-component-definition */
import React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

// import { Container } from './styles';

const Search: React.FC = (props: SvgProps) => {
  return (
    <Svg width="27" height="27" viewBox="0 0 27 27" fill="none" {...props}>
      <Path
        d="M11.5465 23.0917C14.1083 23.0912 16.5963 22.2336 18.6144 20.6555L24.9592 27L27 24.9593L20.6552 18.6148C22.2342 16.5967 23.0923 14.1082 23.093 11.5459C23.093 5.17976 17.9129 0 11.5465 0C5.18004 0 0 5.17976 0 11.5459C0 17.912 5.18004 23.0917 11.5465 23.0917ZM11.5465 2.88647C16.3224 2.88647 20.2063 6.7702 20.2063 11.5459C20.2063 16.3215 16.3224 20.2053 11.5465 20.2053C6.77057 20.2053 2.88662 16.3215 2.88662 11.5459C2.88662 6.7702 6.77057 2.88647 11.5465 2.88647Z"
        fill="#17375F"
      />
    </Svg>
  );
};

export default Search;
