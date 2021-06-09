import React from 'react';
import Form from 'react-bootstrap/Form'
import {Button, Card , Jumbotron , Container} from 'react-bootstrap/';
import '../css/App.css';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';

// import CountactUsCss from ''

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            userName: '',
            userEmail: '',
            userNumber: '',
            userFeedback: '',
            show: false,
            serverRoute: 'http://localhost:3001'
        });
    }
    
    submitFun = async (event) => {
    event.preventDefault();
    await this.setState({
      userName:event.target.userName.value,
      userEmail:event.target.userEmail.value,
      userNumber:event.target.userNumber.value,
      userFeedback:event.target.userFeedback.value,
      show:true,
     

      
    })
    const feedbackData ={
        userName: this.state.userName,
        userEmail:  this.state.userEmail,
        userNumber:  this.state.userNumber,
        userFeedback:  this.state.userFeedback,
    }

    const newFeedback = await axios.post(`${this.state.serverRoute}/contactUs`,feedbackData)
    NotificationManager.info('Message Received' , 'We will get back to you soon' , 3000)

}


closeFunction = async (e)=>{
    e.preventDefault();
    await this.setState({
        show:false,
    })
}
render() {
    
    return (
        <>
        <div className='jumb'>
        <Jumbotron fluid id="team-intro">
            <Container class='converter-head'>
                <h2> Get in touch!</h2>
                <p>
please feel free to drop me a line if u don't get an answer immediately. I might just be traveling through the middle of nowhere. I will get back to u as soon as I can. That's a promise.
            </p>
            </Container>
        </Jumbotron>
    </div>
        <div className='contact'>
            <NotificationContainer/>
                <Card className="text-center">
                <Card.Header> To contact us, you can fill out the form and we will respond as soon as possible </Card.Header>
                <Card.Body>
                <Form className='form' onSubmit={this.submitFun}>
                    <Form.Group>
                        <Form.Control className="col" type="text" placeholder="Enter Your name" name="userName" value={this.props.userName} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                        <Form.Control className="col" type="email" placeholder="Enter email" name="userEmail" />
                   
                    </Form.Group>
                    <Form.Group>
                        <Form.Control className="col" class="test" type="text" placeholder="Enter Phone number" name="userNumber" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control className="col" as="textarea" rows={3} name="userFeedback" placeholder="Write your feedback"/>
                    </Form.Group>
                    <Button variant="outline-primary" type="submit" className = 'testt2'>
                        Submit
                    </Button>
                </Form>
  </Card.Body>

</Card>



            </div>
        </>
        )
     
    }
}
export default Contact;