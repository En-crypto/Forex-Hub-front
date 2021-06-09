import axios from 'axios';
// import { Button } from 'bootstrap';
import React from 'react';
import { Button ,Jumbotron , Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
// import Feedback from 'react-bootstrap/esm/Feedback';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class Feeder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feeds: [],
        }
        this.getFeedBack();
    }

    getFeedBack = async () => {
        const source = 'http://localhost:3001';
        let userFeed = await axios.get(`${source}/getfeed`);
        this.setState({
            feeds: userFeed.data,
        })
    }


    deleteFeedBack = async (index) => {
        const userEmail = {
            email: this.state.feeds.userEmail
        }
        const source = 'http://localhost:3001';

        let newfeeds = await axios.delete(`${source}/deletefeed/${index}`, { params: userEmail })
            this.getFeedBack();
        this.setState({
            feeds: newfeeds.data,
        })
        NotificationManager.warning('FeedBack removed', 'Make sure to fix the issue', 3000);
    }

    render() {
        return (
            <>
                            <div className='jumb'>
                    <Jumbotron fluid id="team-intro">
                        <Container class='converter-head'>
                            <h2>Feed Back</h2>
                            <p>
                                Here You can see User's feed backs <br></br>
                           Take in consideration to reply to them ASAP and delete them .
                        </p>
                        </Container>
                    </Jumbotron>
                </div>
            <NotificationContainer/>
                <div className='feedback container'>
                    
                    
                    {this.state.feeds.length >0 &&
                    
                    <Table striped bordered hover >
                        <thead style={{ textAlign: "center" }}>
                            <tr>
                                <th >User Name</th>
                                <th>User Email</th>
                                <th>User FeedBack</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody style={{ textAlign: "center" }}>

                            {this.state.feeds.map((item, key) => {
                                return (
                                    <tr key={key}>

                                        <td>{item.userName}</td>
                                        <td>{item.userEmail}</td>
                                        <td>{item.userFeedback}</td>
                                        <Button variant="danger" onClick={() => this.deleteFeedBack(key)}>X</Button>
                                    </tr>
                                )


                            })}


                        </tbody>
                    </Table>
                    }

                </div>

            </>
        )
    }
}

export default Feeder;


