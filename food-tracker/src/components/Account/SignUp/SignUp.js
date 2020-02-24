import React from 'react';
import { Row, Col, Input, Button, DatePicker, InputNumber } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            birthday: moment(),
            height: 175,
            weight: 0
        };
    }

    handleChange(event) {
        this.state({ [event.target.name]: event.target.value });
    }

    handleSignUp(event) {
        
    }

    render() {
        return (
            <Col span={8} offset={8}>
                <Row>
                    <Input placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={event => this.handleChange(event)}/>
                </Row>
                <Row>
                    <Input placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={event => this.handleChange(event)}/>
                </Row>
                <Row>
                    <Input placeholder="Confirm password"
                        name="confirmPassword"
                        value={this.state.email}
                        onChange={event => this.handleChange(event)}/>
                </Row>
                <Row>
                    <DatePicker placeholder="Birthday"
                        name="birtday"
                        value={this.state.birthday}
                        onChange={event => this.handleChange(event)}/>
                </Row>
                <Row>
                    <InputNumber placeholder="Height"
                        name="height"
                        value={this.state.height}
                        onChange={event => this.handleChange(event)}/>
                </Row>
                <Row>
                    <Input placeholder="Weight"
                        name="weight"
                        value={this.state.weight}
                        onChange={event => this.handleChange(event)}/>
                </Row>
                <Row justify="space-around" type="flex">
                    <Col>
                        <Button onClick={this.props.history.goBack}>Back</Button>
                    </Col>
                    <Col>
                        <Button type="primary" onClick={event => this.handleSignUp(event)}>Sign up</Button>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default connect(state => ({}))(SignUp)