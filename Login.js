import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classes from './Login.css';
import {TiLockClosedOutline} from 'react-icons/ti';


const login = () => (
    <Container className={classes.Login}>
        <p>Log-in</p>
        <p><TiLockClosedOutline /></p>
        <Form className={classes.Form}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <a href="/Register" className="mt-3">Register</a>
        </Form>
    </Container>
);

export default login;