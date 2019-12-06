import React from 'react';

//Import homepage components
import Layout from "../components/general/layout";
import FarmerSignUpCard from '../components/registration/FarmerSignUpCard'
import CustomerSignUpCard from "../components/registration/CustomerSignUpCard";
export default class Account extends React.Component {

    render = () => {
        let signUp = this.props.type === "farmer" ? <FarmerSignUpCard setFarmerID={this.props.setFarmerID}></FarmerSignUpCard> : <CustomerSignUpCard setCustomerID={this.props.setCustomerID}></CustomerSignUpCard>

        return (
            <Layout >
                {signUp}
            </Layout>
        );
    }

}