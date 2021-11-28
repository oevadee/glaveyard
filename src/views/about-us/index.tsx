import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const SSection = styled.section`
    padding: 48px;
`;

const SHeading = styled.h1`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
`;

const SParagraph = styled.p`
    font-size: 48px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    margin-top: 12px;
    width: 70%;
    margin-bottom: 120px;
`;

const SImageWrapper = styled.div`
    width: 100%;
    transform: scale(1.2);
`;

export const AboutUsView = () => {
    const { vondelpark } = useStaticQuery(graphql`
        query VondelPark {
            vondelpark: file(relativePath: { eq: "vondelpark.png" }) {
                id
                childImageSharp {
                    gatsbyImageData(
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        layout: FULL_WIDTH
                    )
                }
            }
        }
    `);

    console.log(vondelpark);
    return (
        <SSection>
            <SHeading>About us</SHeading>
            <SParagraph>
                Glaveyard is a clothing brand created for those who struggle
                with their life. We're not interested in making any profit as
                everything will go back to community.
            </SParagraph>
            <SImageWrapper>
                <GatsbyImage
                    image={vondelpark.childImageSharp.gatsbyImageData}
                    alt=""
                    style={{
                        height: 400,
                    }}
                />
            </SImageWrapper>
        </SSection>
    );
};
