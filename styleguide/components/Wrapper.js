import React from 'react';
import ThemeProvider from '../../src/styles/ThemeProvider';

export default ({ children }) => <ThemeProvider theme="light">{children}</ThemeProvider>;
