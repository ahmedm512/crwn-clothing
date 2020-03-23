import React, { Component } from 'react';
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in-and-sign-up.styles.scss';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class SignInAndSignUp extends Component {
    render() {
        return (
        <div className='sign-in-and-sign-up'>
        <Container>
            <Row>            
                <Col>
                <SignIn />
                </Col>
                <Col>
                <SignUp />
                </Col>
            </Row>
        </Container>
            </div>
        );
    }
}

export default SignInAndSignUp;