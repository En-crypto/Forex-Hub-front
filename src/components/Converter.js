import React from 'react';
import axios from 'axios';
import { Form,Button } from 'react-bootstrap';


class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currencyFrom: 'USD',
            currencyTo: 'JOD',
            amount: 1,
            result: 0,
            currencies: [],

        }
        this.getSymbols();
    }
    // https://api.exchangerate.host/convert?from=USD&to=EUR
    getConverterData = async (e) => {
        e.preventDefault();
        let source = 'http://localhost:3001';
        const resultData = await axios.get(`${source}/convert?from=${this.state.currencyFrom}&to=${this.state.currencyTo}`);
        this.setState({
            result:resultData.data
        })

        console.log(this.state.result.result);
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
            currencyTo: e.target.value.substring(0,3)
        })

        console.log(this.state.currencyTo);
    } 

    fromHandler = (e) => {
        this.setState({
            currencyFrom: e.target.value.substring(0,3)
        })

        console.log(this.state.currencyFrom);
    } 

    amountHandler = (e) => {
        this.setState({
            amount: e.target.value
        })

        console.log(this.state.amount);
    }

    render() {
        return (
            <div>
                <Form className='converter' onSubmit={this.getConverterData}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" placeholder="Enter Amount" onChange={this.amountHandler}/>
                        <Form.Group controlId="formGridState">
                        </Form.Group>
                        <Form.Control as="select" defaultValue="From" onChange = {this.fromHandler}>
                            <option>From</option>
                            {this.state.currencies.map(item => {
                                return(
                            <option>{item.code} - {item.description}</option>
                                )
                            })}
                        </Form.Control>

                        <Form.Control as="select" defaultValue="To" onChange = {this.toHandler}>
                            <option>To</option>
                            {this.state.currencies.map(item => {
                                return(
                            <option>{item.code} - {item.description}</option>
                                )
                            })}
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Convert
                    </Button>
                </Form>

                {/* {this.state.result && <p>{this.state.result}</p>} */}
            </div>
        )
    }
}
export default Converter;