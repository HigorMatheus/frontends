import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

// import { Container } from './styles';

// eslint-disable-next-line react/function-component-definition
const Start: React.FC<SvgProps> = props => {
  return (
    <Svg width="31" height="29" viewBox="0 0 31 29" fill="none" {...props}>
      <Path
        d="M29.5669 11.7804H18.8194L15.5701 1.64697L12.3208 11.7804H1.57324L10.3213 17.8605L6.94703 27.994L15.5701 21.6606L24.1931 27.994L20.8189 17.8605L29.5669 11.7804Z"
        stroke="white"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Start;
