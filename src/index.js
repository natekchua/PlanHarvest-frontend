import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

//Import desktop pages 
import HomePage from './pages/home';
import SignUp from './pages/account';
import LogIn from './components/registration/LogInCard';
import FDashBoard from './components/farmer/farmer-dashboard';

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
