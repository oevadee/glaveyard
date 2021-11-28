import { Button } from 'components/button';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const SNav = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SHeading = styled.h1`
    font-size: 24px;
    text-transform: uppercase;
    margin: 0;
`;

const SNavWrapper = styled.div`
    display: flex;
    gap: 24px;
`;

const SList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    gap: 24px;
`;

const SListItem = styled.li`
    cursor: pointer;

    .navigation-active-item {
        position: relative;

        &::after {
            content: '';
            position: absolute;
            width: calc(100% + 4px);
            height: 4px;
            bottom: -2px;
            left: -2px;
            border-radius: 2px;
            background: ${({ theme }) => theme.colors.darkOlive};
        }
    }

    > a {
        text-decoration: none;
        transition: ${({ theme }) => theme.transition};

        &:hover {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

export const Navigation = () => {
    return (
        <SNav>
            <Link to="/">
                <SHeading>Glaveyard</SHeading>
            </Link>
            <SNavWrapper>
                <SList>
                    <SListItem>
                        <Link
                            to="/news"
                            activeClassName="navigation-active-item"
                        >
                            News
                        </Link>
                    </SListItem>
                    <SListItem>
                        <Link
                            to="/about-us"
                            activeClassName="navigation-active-item"
                        >
                            About us
                        </Link>
                    </SListItem>
                </SList>
                <Button disabled>Shop</Button>
            </SNavWrapper>
        </SNav>
    );
};
