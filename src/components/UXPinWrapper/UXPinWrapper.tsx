// eslint-disable-next-line no-unused-vars
import { PropsWithChildren, FC } from 'react';
import { theme } from './boilerplate-theme';
import { ConfigProvider } from 'antd';

import './index.css'

const UXPinWrapper: FC<PropsWithChildren> = ({ children }) => {

  const icons = document.createElement('link');
  icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
  icons.setAttribute('rel', 'stylesheet');
  document.head.appendChild(icons);

  return (
    <ConfigProvider theme={theme}>{children}</ConfigProvider>)
}

export default UXPinWrapper;
