import React from 'react';
import { Card, Button ,ProgressBar} from 'react-bootstrap';
import Converter from './Converter';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress:25,
      currentUser:{}
    }
 
  }
  addUser = async () => {
    const userData = {
      name: this.props.auth0.user.name,
      email: this.props.auth0.user.email,
      image_url: this.props.auth0.user.picture,
      interests:'nothing'
    }
    let newUser = await axios.post(`http://localhost:3001/addUser`, userData);
    this.setState({
      currentUser: JSON.parse(newUser.config.data)
    })

    console.log(this.state.currentUser);
    // NotificationManager.success('Book Name : ' + this.state.bookName, 'Added to ' + this.props.auth0.user.email);
  }

  render() {
    return (

      <>
      {this.props.auth0.isAuthenticated ? this.addUser: console.log('error')}
      {this.state.progress && <p>Complete your profile</p>}
      <ProgressBar animated now={this.state.progress} />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.state.currentUser.image_url} />
          <Card.Body>
            <Card.Title>{this.state.currentUser.name}</Card.Title>
            <Card.Text>
              some information and intersets about the person
    </Card.Text>
            <Card.Title>
            Email: {this.state.currentUser.email}
    </Card.Title>
            <Card.Text>
              Date : {Date.now}
    </Card.Text>
            <Button variant="primary" >Favorite Currency</Button>
          </Card.Body>
        </Card>

        <Converter />

      </>

    )
  }
}

export default withAuth0(Profile);
