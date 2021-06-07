import axios from 'axios';
// import { Button } from 'bootstrap';
import React from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
// import Feedback from 'react-bootstrap/esm/Feedback';


class Feeder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feeds: []
        }
        this.getFeedBack();
    }

    getFeedBack = async () => {
        const source = 'http://localhost:3001';
        let userFeed = await axios.get(`${source}/getfeed`);
        this.setState({
            feeds: userFeed.data
        })
        console.log(userFeed.data);

    }


    deleteFeedBack = async (index) => {
        const userEmail = {
            email: this.state.feeds.userEmail
        }
        const source = 'http://localhost:3001';

        let newfeeds = await axios.delete(`${source}/deletefeed/${index}`, { params: userEmail })

        this.setState({
            feeds: newfeeds.data
        })
    }

    render() {
        return (
            <>
                <div className='feedback'>

                    <Table striped bordered hover variant="dark">
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
                </div>

            </>
        )
    }
}

export default Feeder;


