import React, { ReactNode } from 'react';
import { Navigation } from 'src/modules/navigation';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';

const SWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 0 24px;
    background: ${({ theme }) => theme.colors.dark};
`;

const SMain = styled.main`
    height: calc(100vh - ${({ theme }) => theme.dimentions.nav});
`;

interface Props {
    children: ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SWrapper>
                <Navigation />
                <SMain>{children}</SMain>
            </SWrapper>
        </ThemeProvider>
    );
};
