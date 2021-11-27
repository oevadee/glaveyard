import * as React from 'react';
import { Layout } from 'layouts/index';
import { IndexView } from 'views/index';

const IndexPage = (props) => {
    console.log(props);
    return (
        <Layout>
            <IndexView />
        </Layout>
    );
};

export default IndexPage;
