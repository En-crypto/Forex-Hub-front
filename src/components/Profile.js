import React from 'react';
import {Card,Button} from 'react-bootstrap';
import Converter from './Converter';


class Profile extends React.Component{

    render(){
        return(

<>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://miro.medium.com/max/12000/1*PgIo7r6qQXem8BmWd-vksQ.jpeg" />
  <Card.Body>
    <Card.Title>Name of Person</Card.Title>
    <Card.Text>
     some information and intersets about the person
    </Card.Text>
    <Card.Title>
     Person@gmail.com
    </Card.Title>
    <Card.Text>
     Date : 6/3/2021
    </Card.Text>
    <Button variant="primary">Favorite Currency</Button>
  </Card.Body>
</Card>

<Converter/>

</>

        ) 
    }
}

export default Profile;
