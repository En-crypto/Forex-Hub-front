import axios from 'axios';
// import { Button } from 'bootstrap';
import React from 'react';
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
            feeds:userFeed.data
        })
        console.log(userFeed.data);
    }
    render(){
        return(
            <p>Mohammed</p>
        )
    }
}

export default Feeder;