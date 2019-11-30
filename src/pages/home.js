import React from 'react';

//Import homepage components
import Layout from "../components/general/layout";
import Showcase from "../components/home/showcase";

export default class HomePage extends React.Component {
    render = () => {
        return (
            <Layout >
                <Showcase />
            </Layout>
        );
    }

}