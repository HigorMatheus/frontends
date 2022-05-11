/* eslint-disable camelcase */
/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React from 'react';
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';
import { MuktaMahee_600SemiBold } from '@expo-google-fonts/mukta-mahee';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/home';
import theme from './styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
    MuktaMahee_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent style="light" backgroundColor="#528FBF" />
      <Home />
    </ThemeProvider>
  );
}
