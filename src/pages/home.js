import React from 'react';

//Import homepage components
import Layout from "../components/layout";
import Showcase from "../components/showcase";

export default class HomePage extends React.Component {
    render = () => {
        return (
            <Layout >
                <Showcase />
            </Layout>
        );
    }

}