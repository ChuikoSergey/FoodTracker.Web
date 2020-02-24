import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/account"/>
                <Route path="/" />
            </Switch>
        </BrowserRouter>
    </Provider>
)

App.propTypes = {
    store: PropTypes.object.isRequired
}

export default App;