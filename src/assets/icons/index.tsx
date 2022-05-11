/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SvgProps } from 'react-native-svg';
import LayersOutline from './layers-outline';
import PhotoPlus from './photo-plus';
// import CalendarClearOutline from './calendar-clear-outline';
import Config from './config';
import Notification from './notification';
import Star from './star';
import Home from './home-outline';
import Calendar from './calendar-clear-outline';
import Search from './search';

export type IconName =
  | 'layers-outline'
  | 'photo-plus'
  | 'calendar'
  | 'config'
  | 'notification'
  | 'star'
  | 'home-outline'
  | 'search';

interface IconProps extends SvgProps {
  name: IconName;
}

export function Icons({ name, ...props }: IconProps) {
  switch (name) {
    case 'layers-outline':
      return <LayersOutline {...props} />;
    case 'photo-plus':
      return <PhotoPlus {...props} />;
    case 'calendar':
      return <Calendar {...props} />;
    case 'config':
      return <Config {...props} />;
    case 'notification':
      return <Notification {...props} />;
    case 'star':
      return <Star {...props} />;
    case 'home-outline':
      return <Home {...props} />;
    case 'search':
      return <Search {...props} />;
    default:
      return <Home />;
  }
}
