import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Event from './components/Events/Event/Event';
import Register from './components/Register/Register';
import Gallery from './components/Gallery/Gallery';

//import { withRouter } from 'react-router-dom';
//import Axios from 'axios';
//import History from './components/History/History';
//import Loginas from './components/Loginas/Loginas';
 /*function App(){
   const [name,setName]=useState('')
   const [email,setEmail]=useState('')
   const handleClick=(e)=> {
     e.preventDefault();
     if(e.target.id==="name") {
       setName(e.target.value)

     }
     else{
       setEmail(e.target.value)
     }

   }
   const handleSubmit =(e) => {
     e.preventDefault();
     const dataToSubmit = {
       name,
       email
     }
     Axios.post("api/sendMail",dataToSubmit)

   }
   return {*/
     /*<div className="App">
     <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <form onSubmit={handleSubmit}>
     <input id="name" placeholder="Name" value={name} onChange={handleClick}/>
     <input id="email" placeholder="Email" value={email} onChange={handleClick}/>
     <button onClick={handleSubmit}>send Email</button>

     
     
     </form>
     </header>
     </div>
   };
  }
*/

class App extends Component {
  render() {
    return (
  
     
  <React.Fragment>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/About" component={About} />
              <Route exact path="/Gallery" component={Gallery}/>
              
              <Route path="/Contact" component={Contact} />
              
              <Route path="/event" component={Event} />
                 <Route path="/Register" component={Register} />
                 <Route path="/Login" component={Login} />
                
                
                

            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
      
      
 );
}
}
  
  
export default App;

      /*<div>
      <button onClick={this.fun.bind(this)}>Click</button>
      <h1>{this.state.name}</h1>
    </div>
   
  
export default withRouter (App);
/* constructor()
  {
    super();
    this.state={name:'sandesh'}
    this.myfun=this.myfun.bind(this);
  }
  myfun()
  {
    this.setState({name:'vivek'});
  }
  fun() {
    this.props.history.push("/Home");
  }*/