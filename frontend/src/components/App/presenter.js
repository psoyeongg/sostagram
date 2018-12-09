import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './styles.scss';
import Footer from 'components/Footer';
import Auth from 'components/Auth';

const App = props => [
    // Nav,
    props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
    <Footer key={3} />
]

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
    <HashRouter>
        <Switch>
            <Route exact path="/" render={() => "feed"} />
            <Route exact path="/explore" render={() => "explore"} />
        </Switch>
    </HashRouter>
)

const PublicRoutes = props => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Auth} />
            <Route exact path="/forgot" render={() => "password"} />
        </Switch>
    </HashRouter>
)

export default App;
