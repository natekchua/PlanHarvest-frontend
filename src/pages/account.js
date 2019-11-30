import React from 'react';

//Import homepage components
import Layout from "../components/general/layout";
import SignUpCard from "../components/registration/SignUpCard";
export default class Account extends React.Component {
    render = () => {
        return (
            <Layout >
                <SignUpCard />
            </Layout>
        );
    }

}