import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory, Switch, BrowserRouter as Router, Route } from 'react-router-dom';

//Import desktop pages 
import HomePage from './pages/home';
import SignUp from './pages/account';
import LogIn from './components/registration/LogInCard';
import FDashBoard from './components/farmer/farmer-dashboard';
import FInventory from './components/farmer/inventory';
import FContracts from './components/farmer/contracts';
import FAssets from './components/farmer/assets';
import FFields from './components/farmer/field';
import FManager from './components/farmer/fieldSummary';
import EditProduct from "./components/farmer/editProduct";
import EditContract from "./components/contractor/createContract";
import EditBin from "./components/farmer/editBin"
import EditShed from "./components/farmer/editShed"

import CDashboard from "./components/contractor/contractor-dashboard";

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customerID: -1,
            farmerID: -1
        }

    }

    setCustomerID = (id) => {
        this.setState({
            customerID: id 
        })
    }

    setFarmerID = (id) => {
        this.setState({
            farmerID: id
        })

    }

    getFarmerID = () => {
        return this.state.farmerID
    }


    render = () => {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={() => <HomePage history={useHistory()}/> } />
                    <Route exact path="/home" component={() => <HomePage history={useHistory()}/>} />
                    <Route exact path="/signup/farmer" component={() => <SignUp type ="farmer" setFarmerID={this.setFarmerID} history={useHistory()}/>} />
                    <Route exact path="/signup/customer" component={() => <SignUp type="customer" setCustomerID={this.setCustomerID} history={useHistory()}/>} />
                    <Route exact path="/login/farmer" component={() => <LogIn type = "farmer" setFarmerID={this.setFarmerID} history={useHistory()}/>} />
                    <Route exact path="/login/customer" component={() => <LogIn type ="customer" setCustomerID={this.setCustomerID} history={useHistory()}/>} />
                    <Route exact path="/farmer-dashboard" component={() => <FDashBoard getID={this.getFarmerID} history={useHistory()}/>} />
                    <Route exact path="/farmer-inventory" component={() => <FInventory id={this.state.farmerID} history={useHistory()}/>} />
                    <Route exact path="/farmer-contracts" component={() => <FContracts id={this.state.farmerID} history={useHistory()}/>} />
                    <Route exact path="/farmer-assets" component={() => <FAssets id={this.state.farmerID} history={useHistory()}/>} />
                    <Route exact path="/farmer-fields" component={() => <FFields id={this.state.farmerID} history={useHistory()}/>} />
                    <Route exact path="/farmer-field-manager" component={() => <FManager id={this.state.farmerID} history={useHistory()}/>} />
                    <Route exact path="/edit-product" component={() => <EditProduct id={this.state.farmerID} history={useHistory()}/>} />
                    <Route exact path="/edit-contract" component={() => <EditContract id={this.state.customerID} history={useHistory()}/>} />
                    <Route exact path="/edit-bin" component={() => <EditBin id={this.state.customerID} history={useHistory()}/>} />
                    <Route exact path="/edit-shed" component={() => <EditShed id={this.state.customerID} history={useHistory()}/>} />
                    <Route exact path="/contractor-dashboard" component={() => <CDashboard id={this.state.customerID} history={useHistory()}/>} />
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
