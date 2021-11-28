import React, { ReactNode } from 'react';
import styled from 'styled-components';

const SWrapper = styled.button`
    border-radius: 36px;
    padding: 6px 24px;
    background: ${({ theme }) => theme.colors.primary};
    border: solid 3px ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;

    &:hover {
        background: transparent;

        > p {
            color: ${({ theme }) => theme.colors.white};
        }
    }

    &:disabled {
        opacity: 0.3;
        cursor: not-allowed;

        &:hover {
            background: ${({ theme }) => theme.colors.primary};

            > p {
                color: ${({ theme }) => theme.colors.dark};
            }
        }
    }
`;

const SParagraph = styled.p`
    color: ${({ theme }) => theme.colors.dark};
    margin: 0;
`;

interface Props {
    children: ReactNode;
    disabled?: boolean;
}

export const Button = ({ children, disabled = false }: Props) => {
    return (
        <SWrapper disabled={disabled}>
            <SParagraph>{children}</SParagraph>
        </SWrapper>
    );
};
