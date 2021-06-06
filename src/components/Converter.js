import React from 'react';
import axios from 'axios';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { ArrowLeftRight } from 'react-bootstrap-icons';



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

        console.log(this.state.amount);
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
            <div >
                <Card className='converter' >
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
                            <Button variant="primary" type="submit" className="convert-btn">
                                Convert
                    </Button>
                        </Form>


                        {this.state.showResult &&
                            <p>{`${this.state.amount} ${this.state.currencyFrom} = ${this.state.result} ${this.state.currencyTo}`}</p>
                        }

                    </Card.Body>
                </Card>


            </div>
        )
    }
}
export default Converter;


{/* <Form onSubmit={this.getConverterData}>

                        <Row>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control className="inputs" type="number" placeholder="Enter Amount" onChange={this.amountHandler} />
                            <Form.Group controlId="formGridState">
                            </Form.Group>
                            <Form.Control className="inputs" as="select" defaultValue="From" onChange={this.fromHandler}>
                                <option>From</option>
                                {this.state.currencies.map(item => {
                                    return (
                                        <option>{item.code} - {item.description}</option>
                                    )
                                })}
                            </Form.Control>
                            <button className='swapButton' onClick={this.swapHandle}><ArrowLeftRight /></button>

                            {/* <Button className='swapButton'variant="outline-primary" onClick={this.swapHandle}>
                        <ArrowLeftRight/>
                        </Button>
                         */}

{/* <Form.Control className="inputs" as="select" defaultValue="To" onChange={this.toHandler}>
                                <option>To</option>
                                {this.state.currencies.map(item => {
                                    return (
                                        <option>{item.code} - {item.description}</option>
                                    )
                                })}
                            </Form.Control>
                        </Form.Group>

                        </Row>
                       
                        <Button variant="primary" type="submit" className="convert-btn">
                            Convert
                    </Button>




                        {this.state.showResult &&
                            <p>{`${this.state.amount} ${this.state.currencyFrom} = ${this.state.result} ${this.state.currencyTo}`}</p>
                        }
                    </Form> */}