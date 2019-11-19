import React from 'react';

//Import homepage components
import Layout from "../components/layout";
import LogInCard from "../components/registration/LogInCard";

export default class SignUp extends React.Component {
    render = () => {
        return (
            <Layout >
                <LogInCard />
            </Layout>
        );
    }

}