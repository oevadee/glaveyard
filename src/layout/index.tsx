import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

interface Props {
    children: ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <main>{children}</main>
        </ThemeProvider>
    );
};
