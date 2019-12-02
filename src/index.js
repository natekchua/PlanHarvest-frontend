import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

//Import desktop pages 
import HomePage from './pages/home';
import SignUp from './pages/account';
import LogIn from './components/registration/LogInCard';
import FDashBoard from './components/farmer/farmer-dashboard';
import FInventory from './components/farmer/inventory';
import FContracts from './components/farmer/contracts';
import FAssets from './components/farmer/assets';
import FFields from './components/farmer/field';

export default class App extends React.Component {
    render = () => {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={() => <HomePage />} />
                    <Route exact path="/home" component={() => <HomePage />} />
                    <Route exact path="/signup" component={() => <SignUp />} />
                    <Route exact path="/login" component={() => <LogIn />} />
                    <Route exact path="/farmer-dashboard" component={() => <FDashBoard />} />
                    <Route exact path="/farmer-inventory" component={() => <FInventory />} />
                    <Route exact path="/farmer-contracts" component={() => <FContracts />} />
                    <Route exact path="/farmer-assets" component={() => <FAssets />} />
                    <Route exact path="/farmer-fields" component={() => <FFields />} />

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
