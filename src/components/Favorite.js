import React from 'react';
import { Form, Button, Modal ,Card , ListGroup , Jumbotron , Container} from 'react-bootstrap';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class Favorite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oldFavData: [],
            currencyFrom: '',
            currencyTo: 0,
            currentPrice: 0,
            priceForTenDays: 0,
            priceForOneMonth: 0,
            priceFortwoMonths: 0,
            showModal: false
        }
        if (this.props.auth0.isAuthenticated) {
            this.getFavData();
        }
        console.log(this.state.oldFavData);
    }
    getFavData = async () => {
        let source = process.env.REACT_APP_PORT;
        let email = this.props.auth0.user.email;
            let favData = await axios.get(`${source}/getFavData`, { params: { email } });
            this.setState({
                oldFavData: favData.data
            })
            
    }

    renderData = async (e) => {
        e.preventDefault();
        let source = process.env.REACT_APP_PORT;
        let price = await axios.get(`${source}/convert?from=${this.state.currencyFrom}&to=${this.state.currencyTo}`)
        let tenDays = await axios.get(`https://api.exchangerate.host/timeseries?start_date=2021-05-30&end_date=2021-06-08&base=${this.state.currencyFrom}&symbols=${this.state.currencyTo}`);
        let oneMonth = await axios.get(`https://api.exchangerate.host/timeseries?start_date=2021-05-08&end_date=2021-06-08&base=${this.state.currencyFrom}&symbols=${this.state.currencyTo}`);
        let twoMonths = await axios.get(`https://api.exchangerate.host/timeseries?start_date=2021-04-08&end_date=2021-06-08&base=${this.state.currencyFrom}&symbols=${this.state.currencyTo}`);

        let x = Object.values(tenDays.data.rates);

        this.setState({
            currentPrice: price.data.result,
            priceForTenDays: Math.max(...Object.values(tenDays.data.rates).map(Object.values)),
            priceForOneMonth: Math.max(...Object.values(oneMonth.data.rates).map(Object.values)),
            priceFortwoMonths: Math.min(...Object.values(twoMonths.data.rates).map(Object.values)),
            showModal: true,
            showTable:false
        })
        console.log(typeof (this.state.priceForTenDays));
    }


    handleFav = (e) => {
        this.setState({
            currencyFrom: e.target.value.substring(0, 3),
            currencyTo: e.target.value.substring(6, e.target.value.length)
        })
    }

    handleClose = () => {
        this.setState({
            showModal: false,
            showTable : true
        })
    }
    render() {
        return (
            <>
                            <div className='jumb'>
                    <Jumbotron fluid id="team-intro">
                        <Container class='converter-head'>
                            <h2>Your favorite Currencies</h2>
                            <p>
                                Here you can view your favorite currencies and <br></br>
                                you can view information about your favorite pair of currencies .
                        </p>
                        </Container>
                    </Jumbotron>
                </div>
            <div className='favorite container'>
                <Form onSubmit={this.renderData}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Choose favorite currency</Form.Label>
                        <Form.Control as="select" onChange={this.handleFav}>
                                <option>
                                    Choose :
                                </option>
                            {this.state.oldFavData.map(item => {

                                return (
                                    <option>
                                        {item.name1} / {item.name2}
                                    </option>
                                )
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mybtn'>
                        Submit
                    </Button>
                </Form>

                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.currencyFrom} To {this.state.currencyTo}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Card style={{ width: '30rem' }}>
                        <Card.Header>Featured</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Current Price : {this.state.currentPrice}</ListGroup.Item>
                            <ListGroup.Item>Max price in 10 days : {this.state.priceForTenDays}</ListGroup.Item>
                            <ListGroup.Item>Max price in 30 days : {this.state.priceForOneMonth}</ListGroup.Item>
                            <ListGroup.Item>Min price in 60 days : {this.state.priceFortwoMonths}</ListGroup.Item>
                        </ListGroup>
                        
                    </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose} className='mybtn'>
                            Stick to Screen
                    </Button>
                    </Modal.Footer>
                </Modal>
                {
                    this.state.showTable &&
                    <Card style={{ width: '30rem' }}>
                        <Card.Header>Featured</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Current Price : {this.state.currentPrice}</ListGroup.Item>
                            <ListGroup.Item>Max price in 10 days : {this.state.priceForTenDays}</ListGroup.Item>
                            <ListGroup.Item>Max price in 30 days : {this.state.priceForOneMonth}</ListGroup.Item>
                            <ListGroup.Item>Min price in 60 days : {this.state.priceFortwoMonths}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                }
            </div>
            </>
        )
    }
}

export default withAuth0(Favorite);