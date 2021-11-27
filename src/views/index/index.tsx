import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SParagraph = styled.p`
    font-size: 36px;
`;

export const IndexView = () => {
    return (
        <SWrapper>
            <SParagraph>Website in progress...</SParagraph>
        </SWrapper>
    );
};
