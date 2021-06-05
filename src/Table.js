import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeImg from './img/Home.png';
import Button from 'react-bootstrap/Button';
import Clock from 'react-live-clock';
import { CCard, CCardBody, CCardHeader, CCardText, CCardTitle } from '@coreui/react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { ArrowRight } from 'react-bootstrap-icons';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            livePrice: [],
            historyPrice: [],
            base: 'EUR',
            state: []
        }
        console.log(this.state.base);
    }

    getLivePrice = async (e) => {
        let source = 'http://localhost:3001';
        const historyPrice = await axios.get(`${source}/history?base=${this.state.base}`);
        this.setState({
            base: e.target.value
        })
        const livePrice = await axios.get(`${source}/rate?base=${this.state.base}`);
        this.setState({
            livePrice: Object.entries(livePrice.data.rates),
        })
        this.getHistory();
    }

    getHistory = async () => {
        let source = 'http://localhost:3001';
        const historyPrice = await axios.get(`${source}/history?base=${this.state.base}`);

        this.setState({
            state: historyPrice.data,

        })
    }


    render() {
        return (
            <div className='live' id='live' onLoad={this.getLivePrice}>
                <Button onClick={this.getLivePrice} value='USD' className='curr-btn'>USD</Button>
                <Button onClick={this.getLivePrice} value='GBP' className='curr-btn'>GBP</Button>
                <Button onClick={this.getLivePrice} value='EUR' className='curr-btn'>EUR</Button>
                <Button onClick={this.getLivePrice} value='CAD' className='curr-btn'>CAD</Button>
                <MDBTable hover>
                    <MDBTableHead>
                        <tr onLoad={this.getLivePrice}>
                            <th scope='col'>State</th>
                            <th scope='col'>Currency</th>
                            <th scope='col'>Price to {this.state.base}<sub>(EUR by default)</sub></th>
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
                                            (this.state.state[idx] === 0)?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                                    <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"
                                                    className='dash' />
                                                </svg>
                                                :
                                            (this.state.state[idx] === 1 ) ?
                                            <span style={{color: 'rgb(51, 136, 0)'}}>▲</span>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                                                    className='down-arrow'
                                                />
                                            </svg>
                                            }

                                        </th>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td><Clock format={'hh:mm:ss'} ticking={true} timezone={'Asia/Aden'} /></td>
                                    </tr>
                                )
                            })}
                    </MDBTableBody>
                </MDBTable>
                <div className='home-section' id="home">
                    <img src={HomeImg} alt='Hero' className='home' />
                    <p id="para-home">lorem ipsum
                    lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumv
                    lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                    lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                    lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                    lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                    lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                    lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                </p>
                </div>

                <div className='cards'>
                    <a href="/#home">
                        <CCard

                            color='light'
                            textColor='black'
                            className="mb-3 card"
                            style={{ maxWidth: '18rem' }} >
                            <CCardHeader>Explore!</CCardHeader>
                            <CCardBody>
                                <CCardText>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                    </CCardText>
                            </CCardBody>
                        </CCard>
                    </a>
                    <a href="/#live">
                        <CCard

                            color='light'
                            textColor='black'
                            className="mb-3 card"
                            style={{ maxWidth: '18rem' }} >
                            <CCardHeader>Live Updates</CCardHeader>
                            <CCardBody>
                                <CCardText>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                    </CCardText>
                            </CCardBody>
                        </CCard>
                    </a>
                    <a href="/#hero-btn">
                        <CCard

                            color='light'
                            textColor='black'
                            className="mb-3 card"
                            style={{ maxWidth: '18rem' }} >
                            <CCardHeader>Join Us</CCardHeader>
                            <CCardBody>
                                <CCardText>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                    </CCardText>
                            </CCardBody>
                        </CCard>
                    </a>

                </div>
            </div>
        );
    }

}

export default withAuth0(Table);