import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classes from './Register.css';
import {TiLockClosedOutline} from 'react-icons/ti';

const Register = () => (
    <Container className={classes.Register}>
        <p>Log-in</p>
        <p><TiLockClosedOutline /></p>
        <h1>REGISTRATION FORM</h1>
       
        <Form className={classes.Form}>
        <div class = 'form-check'>
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" / >
                    <label class="form-check-label" for="exampleRadios1"> Register as volunteer</label>
                </div>
                
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                    <label class="form-check-label" for="exampleRadios2">
                    Register as organization
                    </label>
                </div>
            <Form.Group controlId="formBasicname">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter full name" />
                </Form.Group>
                <Form.Group controlId="formBasicage">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="age" placeholder="Enter your age" />
                </Form.Group>
                <Form.Group controlId="formBasicaddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="adress" placeholder="Full Address" />
                </Form.Group>
                <Form.Group controlId="formBasiccontact">
                    <Form.Label>Contact No</Form.Label>
                    <Form.Control type="contact" placeholder="Mob/Landline no" />
                </Form.Group>
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
                
                
                
                <h9>Upload passport size photo</h9>
                <div class="form-group">
                        
                        <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                    </div>

                    <h9>Upload any govt id proof</h9>
                <div class="form-group">
                        {/* <label for="exampleFormControlFile1">Example file input</label> */}
                        <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                    </div>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
    </Container>
      
     
);

export default Register;

