import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSignIn(event) {
        if(this.state.email && this.state.password){

        }
    }

    render() {
        return (
            <div>
                <Col span={8} offset={8}>
                    <Row>
                        <Input placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={event => this.handleChange(event)}/>
                    </Row>
                    <Row>
                        <Input.Password placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={event => this.handleChange(event)}/>
                    </Row>
                    <Row justify="space-around" type="flex">
                        <Col>
                            <Button type="primary"><Link to="account/signup">Sign up</Link></Button>
                        </Col>
                        <Col>
                            <Button onClick={event => this.handleSignIn(event)}>Sign in</Button>
                        </Col>
                    </Row>
                </Col>
            </div>
        );
    }
}

export default connect(state => ({}))(SignIn)