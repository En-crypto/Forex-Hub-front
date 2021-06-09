import React from 'react';
import { Card, Button, ProgressBar, ListGroup, Jumbotron, Container } from 'react-bootstrap';
import Converter from './Converter';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import '../css/App.css'
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      currentUser: {},
    }
    if (this.props.auth0.isAuthenticated) { this.addUser(); }
  }
  addUser = async () => {
    const userData = {
      name: this.props.auth0.user.name,
      email: this.props.auth0.user.email,
      image_url: this.props.auth0.user.picture,
      interests: 'nothing'
    }
    let newUser = await axios.post(`http://localhost:3001/addUser`, userData);
    this.setState({
      currentUser: JSON.parse(newUser.config.data),
      isAuthenticated: true
    })
    console.log(this.state.currentUser);
  }

  render() {
    return (
      <>
        <div className='jumb'>
          <Jumbotron fluid id="team-intro">
            <Container class='converter-head'>
              {this.props.auth0.isAuthenticated &&
                <h2>
                  Hello {this.props.auth0.user.given_name}
                </h2>
              }
            </Container>
          </Jumbotron>
        </div>
        <div className='profile-container'>
          <div className='profile-header'>
            <img className="profileImg" src={this.state.currentUser.image_url} alt='Profile' />
          </div>
          <div className='profile-info'>
            <Card className="card6" style={{ width: '22rem' }}>
              <ListGroup variant="flush">
                <ListGroup.Item className="ccc">
                  <p className="profileName"> First Name : {this.props.auth0.user.given_name}</p>
                </ListGroup.Item>
                <ListGroup.Item className="ccc">
                  <p className="profileEmail">Email : {this.props.auth0.user.email} </p>

                </ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="card7" style={{ width: '22rem' }}>
              <ListGroup variant="flush" >
                <ListGroup.Item className="ccc">
                  <p className="profileName"> Last Name : {this.props.auth0.user.family_name}</p>
                </ListGroup.Item>
                <ListGroup.Item className="ccc">
                  <p className="profileEmail">Updated it : {this.props.auth0.user.updated_at} </p>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
          <Button className="proBut" variant="outline-success" href='/favorite'>Favorite Currency<sub></sub></Button>
        </div>
      </>
    )
  }
}
export default withAuth0(Profile);