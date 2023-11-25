// eslint-disable-next-line no-unused-vars
import React, { ReactNode, FC } from 'react';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './boilerplate-theme';
import { Flowbite } from 'flowbite-react';
import './index.css'

const UXPinWrapper: FC<PropsWithChildren> = ({ children }) => {
  const icons = document.createElement('link');
  icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
  icons.setAttribute('rel', 'stylesheet');
  document.head.appendChild(icons);
  return <Flowbite theme={{ theme: theme }}>{children}</Flowbite>
}

export default UXPinWrapper;
