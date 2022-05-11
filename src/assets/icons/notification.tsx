/* eslint-disable react/function-component-definition */
import React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

// import { Container } from './styles';

const Notification: React.FC<SvgProps> = () => {
  return (
    <Svg
      width="28"
      height="32"
      viewBox="0 0 28 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M18.0498 25.1506V26.2605C18.0498 27.438 17.5711 28.5673 16.719 29.3999C15.8669 30.2325 14.7113 30.7003 13.5062 30.7003C12.3012 30.7003 11.1455 30.2325 10.2934 29.3999C9.44137 28.5673 8.96267 27.438 8.96267 26.2605V25.1506M25.6943 22.8912C23.8712 20.7108 22.5841 19.6009 22.5841 13.5898C22.5841 8.08518 19.7075 6.12404 17.3399 5.17157C17.0254 5.04532 16.7293 4.75534 16.6335 4.4397C16.2182 3.05851 15.0539 1.84174 13.5062 1.84174C11.9586 1.84174 10.7936 3.05921 10.3825 4.44109C10.2867 4.7602 9.99065 5.04532 9.67615 5.17157C7.30569 6.12543 4.43189 8.07963 4.43189 13.5898C4.42834 19.6009 3.14124 20.7108 1.31813 22.8912C0.562767 23.7944 1.22442 25.1506 2.5456 25.1506H24.474C25.788 25.1506 26.4454 23.7902 25.6943 22.8912Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Notification;
