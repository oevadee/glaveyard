import React from 'react';
import styled from 'styled-components';

const SNav = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
`;

const SHeading = styled.h1`
    font-size: 24px;
    text-transform: uppercase;
    margin: 0;
`;

export const Navigation = () => {
    return (
        <SNav>
            <SHeading>Glaveyard</SHeading>
        </SNav>
    );
};
