/* eslint-disable react/function-component-definition */
import React from 'react';
import { View } from 'react-native';
import Svg, { Path, SvgProps } from 'react-native-svg';

// import { Container } from './styles';

const LayersOutline: React.FC<SvgProps> = props => {
  return (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7.54909 17.3413L2.09653 19.788C0.936131 20.3155 0.936131 21.1792 2.09653 21.7066L11.8544 26.157C12.968 26.664 14.8009 26.664 15.9145 26.157L25.6724 21.7066C26.8328 21.1792 26.8328 20.3155 25.6724 19.788L20.4018 17.2516M25.6672 6.07551L15.8196 1.58556C14.7521 1.09766 13.0049 1.09766 11.9375 1.58556L2.09653 6.07551C0.936131 6.60297 0.936131 7.46602 2.09653 7.99347L11.8544 12.4439C12.968 12.9515 14.8009 12.9515 15.9145 12.4439L25.6724 7.99347C26.8276 7.46602 26.8276 6.60231 25.6672 6.07551Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.54909 10.4817L2.08994 12.9318C0.929535 13.4592 0.929535 14.3229 2.08994 14.8504L11.8478 19.3001C12.9614 19.8078 14.7943 19.8078 15.9079 19.3001L25.6658 14.8504C26.8328 14.3229 26.8328 13.4592 25.6724 12.9318L20.208 10.4817"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default LayersOutline;
