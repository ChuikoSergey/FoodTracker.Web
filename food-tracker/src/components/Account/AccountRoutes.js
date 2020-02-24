import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { render } from 'react-dom';

class AccountRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={`${this.props.match.path}/signin`} />
                <Route path={`${this.props.match.path}/signup`} />
                <Route path={`${this.props.match.path}/forgot`} />
                <Route path="*" />
            </Switch>
        );
    }
}

export default connect(store => ({}))(AccountRoutes)