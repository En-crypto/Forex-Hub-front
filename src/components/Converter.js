import React from 'react';
import axios from 'axios';
import { Form, Button, Card, Row, Col,Jumbotron,Container } from 'react-bootstrap';
import { ArrowLeftRight } from 'react-bootstrap-icons';
import { withAuth0 } from '@auth0/auth0-react';


class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currencyFrom: 'USD',
            currencyTo: 'JOD',
            amount: 1,
            result: 1,
            currencies: [],
            showResult: false,
        }
        this.getSymbols();
    }
    // https://api.exchangerate.host/convert?from=USD&to=EUR
    getConverterData = async (e) => {
        e.preventDefault();
        let source = 'http://localhost:3001';
        const resultData = await axios.get(`${source}/convert?from=${this.state.currencyFrom}&to=${this.state.currencyTo}`);
        this.setState({
            result: resultData.data.result * this.state.amount,
            showResult: true

        })

        console.log(this.state.result);
    }


    getSymbols = async () => {
        let source = 'http://localhost:3001';
        const selectData = await axios.get(`${source}/symbols`);
        this.setState({
            currencies: Object.values(selectData.data.symbols),
        })
        console.log(this.state.currencies);
    }

    toHandler = (e) => {
        this.setState({
            currencyTo: e.target.value.substring(0, 3)
        })

        console.log(this.state.currencyTo);
    }

    fromHandler = (e) => {
        this.setState({
            currencyFrom: e.target.value.substring(0, 3)
        })

        console.log(this.state.currencyFrom);
    }

    amountHandler = (e) => {
        this.setState({
            amount: e.target.value
        })

    }

    addToFavortie = async () => {
        let source = 'http://localhost:3001';
        const resultData = await axios.get(`${source}/convert?from=${this.state.currencyFrom}&to=${this.state.currencyTo}`);
        const currencyData = {
            name1: this.state.currencyFrom,
            name2: this.state.currencyTo,
            price: resultData.data.result * this.state.amount,
            email: this.props.auth0.user.email
        }
        const selectData = await axios.post(`${source}/addToFavorite`, currencyData);

    }
    swapHandle = (e) => {

        let temp = this.state.currencyTo
        this.setState({
            currencyFrom: temp,
            currencyTo: this.state.currencyFrom
        })
    }

    render() {
        return (
            <div>
                    <div className='jumb'>
                <Jumbotron fluid id="team-intro">
                    <Container>
                        <h1>About The Converter</h1>
                        <p>
                           Here is a simple money converter with hourly updated exchange rates <br></br>
                           Enter an amount of money in the box, select your currencies from the drop-down lists. DONE!
                        </p>
                    </Container>
                </Jumbotron>
                </div>
                 <div className='converter-c'>
                <Card className='converter' id = 'converter'>
                    <Card.Body>
                        <Form onSubmit={this.getConverterData}>
                            <Row>
                                <Col xs={3}>
                                    <Form.Control className="inputs" type="number" placeholder="Enter Amount" onChange={this.amountHandler} />
                                </Col>
                                <Col xs={4}>
                                    <Form.Control className="inputs" as="select" defaultValue="From" onChange={this.fromHandler}>
                                        <option>From</option>
                                        {this.state.currencies.map(item => {
                                            return (
                                                <option>{item.code} - {item.description}</option>
                                            )
                                        })}
                                    </Form.Control>
                                </Col>
                                <Col xs={1}>
                                    <button className='swapButton' onClick={this.swapHandle}><ArrowLeftRight /></button>
                                </Col>
                                <Col xs={4}>
                                    <Form.Control className="inputs" as="select" defaultValue="To" onChange={this.toHandler}>
                                        <option>To</option>
                                        {this.state.currencies.map(item => {
                                            return (
                                                <option>{item.code} - {item.description}</option>
                                            )
                                        })}
                                    </Form.Control>
                                </Col>
                            </Row>
                            <Button variant="primary" type="submit" className='mybtn one'>
                                Convert
                    </Button >
                        </Form>
                        {this.props.auth0.isAuthenticated &&
                            <Button variant="primary" onClick={this.addToFavortie} className='mybtn two'>
                                Add to Favorite
                            </Button>}


                        {this.state.showResult &&
                            <p className="convert-from">{`${this.state.amount} ${this.state.currencyFrom} =`}</p>
                        }
                        {this.state.showResult &&
                            <p className="convert-to">{` ${this.state.result} ${this.state.currencyTo}`}</p>
                        }

                    </Card.Body>
                </Card>


            </div>
            </div>

           
        )
    }
}
export default withAuth0(Converter);