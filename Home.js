import React, { Component } from 'react';
import classes from './Home.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Event from '../Events/Event/Event';
import {ButtonToolbar } from 'react-bootstrap';
import Route from 'react-router-dom/Route';
class Home extends Component {
    state = {
        events: []
    } 
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
                .then (response => {
                    const events = response.data.slice(0,5);
                    this.setState({events: events})
                    //console.log(response);
                });
    }
    render(){
        const events = this.state.events.map(event =>{
            return <Event title={event.title} body={event.body}/>;
        })
        return (
            <div className={classes.Home}>
                <div className={classes.GridOne}>
                    <h1>Volunteer Management</h1>
                    <hr />
                    <Button variant="light" size="lg">Get Started</Button>        
                </div>
                <div>
               {/* <Button variant="dark" size="lg">Uplode event images</Button> */}
               <button onclick="myFunction()"variant="dark" size="lg">Uplode event images</button>
               </div>
               {/* <div><button type="button" >Secondary</button>
               </div> */}
               <ButtonToolbar>
               <Button href="#gallery">Secondary</Button>
               </ButtonToolbar>
               {/* <Nav className="mr-auto">
                <Nav.Link href="/gallery">Home</Nav.Link>
                </Nav> */}
                <div className="form-group">
                    {/* <label for="exampleFormControlFile1">Example file input</label> */}
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                </div>

                <Container className={classes.Cards}>
                    {events}
                </Container>

           
            </div>
            // <Router>
            //     <div className="Home">
            //         <Route path="/gallery" exact strict render={
            //             ()=>{
            //                 return(<h1>hello</h1>);
            //             }
            //         }/>
            //         <Router path
            //     </div>
            // </Router>
            
        )
    }
}

export default Home;