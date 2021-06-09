import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Clock from 'react-live-clock';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import './css/Home.css';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            livePrice: [],
            base: 'EUR',
            state: []
        }
        this.getLivePrice();
    }
    getLivePrice = async () => {
        let source = 'http://localhost:3001';
        const livePrice = await axios.get(`${source}/rate?base=${this.state.base}`);
        const historyPrice = await axios.get(`${source}/history?base=${this.state.base}`);

        this.setState({
            livePrice: Object.entries(livePrice.data.rates),
            state: historyPrice.data,
        })
    }
    getHistory = async (e) => {
        this.setState({
            base: e.target.value,
        },
            async () => {
                let source = 'http://localhost:3001';
                const livePrice = await axios.get(`${source}/rate?base=${this.state.base}`);
                const historyPrice = await axios.get(`${source}/history?base=${this.state.base}`);

                this.setState({
                    livePrice: Object.entries(livePrice.data.rates),
                    state: historyPrice.data,
                })
            }
        )
    }


    render() {
        return (
            <>
                <div className='live'id="live">
                    <div className='hint'>
                        <p>
                            Choose your base currency :
                            </p>
                    </div>
                    <div className='btns'>
                        <Button onClick={this.getHistory} onChange={this.changeVal} value='USD' className='curr-btn'>USD</Button>
                        <Button onClick={this.getHistory} value='GBP' className='curr-btn'>GBP</Button>
                        <Button onClick={this.getHistory} value='EUR' className='curr-btn'>EUR</Button>
                        <Button onClick={this.getHistory} value='CAD' className='curr-btn'>CAD</Button>
                    </div>
                    <MDBTable hover className='live-table'>
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>State</th>
                                <th scope='col'>Currency</th>
                                <th scope='col'>Price to {this.state.base}</th>
                                <th scope='col'>Time</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                this.state.livePrice.map((item, idx) => {
                                    return (
                                        <tr>
                                            <th scope='row'>
                                                {
                                                    (this.state.state[idx] === 0) ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                                            <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"
                                                                className='dash' />
                                                        </svg>
                                                        :
                                                        (this.state.state[idx] === 1) ?
                                                            <span style={{ color: 'rgb(51, 136, 0)' }}>▲</span>
                                                            :
                                                            <span style={{color: "rgb(179, 0, 33)"}}>▼</span>
                                                }

                                            </th>
                                            <td>{item[0]}</td>
                                            <td>{item[1]}</td>
                                            <td><Clock format={'hh:mm:ss'} ticking={false} timezone={'Asia/Aden'} /></td>
                                        </tr>
                                    )
                                })}
                        </MDBTableBody>
                    </MDBTable>
                </div>

            </>
        );
    }

}

export default withAuth0(Table);