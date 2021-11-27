import * as React from 'react';
import fetch from 'node-fetch';
import { Link } from 'gatsby';

const SSR = ({ serverData: { image } }) => (
    <>
        <Link to="/">Home</Link>
        <br />
        <h1>SSR: Server Side Rendering</h1>
        <img alt="doggo" src={image} />
    </>
);

export default SSR;

export const getServerData = async ({ params }) => {
    const data = await fetch(`https://dog.ceo/api/breeds/image/random`).then(
        (res) => res.json()
    );

    return {
        props: {
            // data has the shape of "message", "status" where message is the image src
            image: data.message,
        },
    };
};
