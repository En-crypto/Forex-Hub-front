import React from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';


class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currencyFrom: 'USD',
            currencyTo: 'JOD',
            amount: '1',
            result: '0.71',
            currencies: [],
            
        }
    }
    // https://api.exchangerate.host/convert?from=USD&to=EUR
    getConverterData = async (e) => {
        e.preventDefault();
        this.setState({
            currencyFrom: this.state.currencyFrom,
            currencyTo: this.state.currencyTo
        })
        const resultData = await axios.get(`https://api.exchangerate.host/convert?from=${this.state.currencyFrom}&to=${this.state.currencyTo}`);
        console.log(resultData.data);
    }

 
    getSymbols = async () => {
        const selectData = await axios.get(`https://api.exchangerate.host/symbols`);
        this.setState({
            currencies: selectData.data.symbols.code,
            //  currencies: selectData.data.map(item => {
            //     return item.symbols.code;
        })
        console.log(this.state.currencies);
    }


    amountHandler = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    render() {
        return (
            <>
                <Form onSubmit={this.getConverterData}>
                    <h2>Currency Convert</h2>
                    <input type="text" onChange={this.amountHandler} />
                    <input type="submit" />

                    <select  onChange={this.getSymbols}>
                        {this.state.currencies.map(item=>{
                            return<option></option>
                        })}
                    </select>
                    <span>=</span>
                    <select onChange={this.getSymbols}>
                        <option value="currency">{this.state.currencyTo}</option>
                    </select>
                </Form>

            </>
        )
    }
}
export default Converter;