import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classes from './Gallery.css';
import {TiLockClosedOutline} from 'react-icons/ti';
import ImageUploader from 'react-images-upload';

class Gallery extends React.Component {
  state = {
    email: {
      recipient: '',
      sender: '',
      subject: '',
      text: ''
    }
  }

  sendEmail = _ => {
    const { email } = this.state;
    fetch(`http://127.0.0.1:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
      .catch(err => console.error(err))
  }

  render() {
    const { email } = this.state;
    const spacer = {
      margin: 10
    }
    const textArea = {
      borderRadius: 4
    }
    return (
      <div className="App">
        <div style={{ marginTop: 10 }} >
          <h2> Send Email </h2>
          <label> Recipient </label>
          <br />
          <input value={email.recipient}
            onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })} />
          <div style={spacer} />
          <label> Sender </label>
          <br />
          <input value={email.sender}
            onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
          <div style={spacer} />
          <label> Subject </label>
          <br />
          <input value={email.subject}
            onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
          <div style={spacer} />
          <label> Message </label>
          <br />
          <textarea rows={3} value={email.text} style={textArea}
            onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
          <div style={spacer} />
          <button onClick={this.sendEmail}> Send Email </button>
        </div>
      </div>
    );
  }
}


 
//   constructor(props) 
//       super(props);
//        this.state = { pictures: [] };
//        this.onDrop = this.onDrop.bind(this);
  

//   onDrop(picture) 
//       this.setState({
//           pictures: this.state.pictures.concat(picture),
//       });
  

//   render() {
//       return (
//           <ImageUploader
//               withIcon={true}
//               buttonText='Choose images'
//               onChange={this.onDrop}
//               imgExtension={['.jpg', '.gif', '.png', '.gif']}
//               maxFileSize={5242880}
//           />
//       );
//   }
// }
// const Gallery = () => (
//   <Container className={classes.Register}>
//   return(
//       <div className={classes.Gallery}>
//           <h1>Share event images</h1>
          
//              <h2> Share event images</h2>
          
//       </div>
//       <div class="form-group">
//       {/* <label for="exampleFormControlFile1">Example file input</label> */}
//       <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
//   </div>

// { <Button variant="primary" type="submit">
//   Upload
// </Button>
// </Container>
//   ); }


// const Gallery = () => (
//     <Container className={classes.Gallery}>
//         <p>Gallery</p>
//         <p><TiLockClosedOutline /></p>
//         <h1>Share your experience</h1>

//         <Form className={classes.Gallery}>
        
//         <div class="form-group">
//                         {/* <label for="exampleFormControlFile1">Example file input</label> */}
//                         <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
//                     </div>

//             <Button variant="primary" type="submit">
//                               Submit
//             </Button>
// </Form>
// </Container>
// );
export default Gallery;
       