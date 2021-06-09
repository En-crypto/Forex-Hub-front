import React from 'react';
import axios from 'axios';
import { Form, Button, Card, Row, Col, Jumbotron, Container } from 'react-bootstrap';
import { ArrowLeftRight } from 'react-bootstrap-icons';
import { withAuth0 } from '@auth0/auth0-react';
import { NotificationContainer, NotificationManager } from 'react-notifications';


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
            swap : false
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
        NotificationManager.success('Added to favorite', 'Succesful');

    }
    swapHandle = (e) => {

        let temp = this.state.currencyTo
        this.setState({
            currencyFrom: temp,
            currencyTo: this.state.currencyFrom,
            swap:true
        })

        if(this.state.swap){
            this.setState({
                swap:false
            })
        }
            else{
                this.setState({
                    swap:true
                })
            }

            console.log(this.state.swap);
    }

    render() {
        return (
            <div>
                <NotificationContainer />
                <div className='jumb'>
                    <Jumbotron fluid id="team-intro">
                        <Container class='converter-head'>
                            <h2>About The Converter</h2>
                            <p>
                                Here is a simple money converter with hourly updated exchange rates <br></br>
                           Enter an amount of money in the box, select your currencies from the drop-down lists. DONE!
                        </p>
                        </Container>
                    </Jumbotron>
                </div>
                <div className='converter-c'>
                    <Card className='converter'>
                        <Card.Body>
 <div>
                                                                <h2 className = 'conv-header'>Convert</h2>
                                                            <Form onSubmit={this.getConverterData} className='conv-form'>
                                                            <Row>
                                                                <Col xs={4}>
                                                                    <Form.Control className="inputs" type="number" placeholder="Enter Amount" onChange={this.amountHandler} />
                                                                </Col>
                                                                <Col xs={3}>
                                                                    <Form.Control className="inputs" as="select"  onChange={this.fromHandler} selected>
                                                                        <option>
                                                                            From
                                                                        </option>
                                                                        {this.state.currencies.map(item => {
                                                                            return (
                                                                                <option >{item.code} - {item.description}</option>
                                                                            )
                                                                        })}
                                                                    </Form.Control>
                                                                </Col>
                                                                <Col xs={1}>
                                                                    <button className='swapButton' onClick={this.swapHandle}><ArrowLeftRight /></button>
                                                                </Col>
                                                                <Col xs={3}>
                                                                    <Form.Control className="inputs" as="select"  onChange={this.toHandler} selected>
                                                                    <option>
                                                                            To
                                                                        </option>
                                                                        {this.state.currencies.map(item => {
                                                                            return (
                                                                                <option>{item.code} - {item.description}</option>
                                                                            )
                                                                        })}
                                                                    </Form.Control>
                                                                </Col>
                                                            </Row>
                                                            <Button variant="primary" type="submit" className='mybtn conv-btn'>
                                                                Convert
                                                </Button >
                                                        </Form>
                                                        </div>

                                <div className='result'>
                            {this.state.showResult &&
                                <p className="convert-from">{`${this.state.amount} ${this.state.currencyFrom} =`} {` ${this.state.result} ${this.state.currencyTo}`}</p>
                            }
                            {this.props.auth0.isAuthenticated &&
                                <Button variant="primary" onClick={this.addToFavortie} className='mybtn conv-btn'>
                                    Add to Favorite
                            </Button>}
                                </div>

                        </Card.Body>
                    </Card>


                </div>
            </div>


        )
    }
}
export default withAuth0(Converter);