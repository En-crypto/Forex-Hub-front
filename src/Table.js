import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeImg from './img/Home.png';
import Button from 'react-bootstrap/Button';
import Clock from 'react-live-clock';
import { CCard,CCardBody,CCardHeader,CCardText,CCardTitle } from '@coreui/react';
import { withAuth0 } from '@auth0/auth0-react';


class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: Date
        }
    }

    d = new Date();
    // setTimeout(changeTime, 3000);

    // changeTime = ()=> {
    //     this.setState({
    //         time:Date.now
    //     })
    // }

    render() {
        return (
            <div className='live' id='live'>
                <Button>USD</Button>
                <Button>GBP</Button>
                <Button>EUR</Button>
                <Button>CAD</Button>
                <MDBTable hover>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>First</th>
                            <th scope='col'>Last</th>
                            <th scope='col'>Time</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <th scope='row'>1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td><Clock format={'hh:mm:ss'} ticking={true} timezone={'Asia/Aden'} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td><Clock format={'hh:mm:ss'} ticking={true} timezone={'Asia/Aden'} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>3</th>
                            <td colSpan={2}>Larry the Bird</td>
                            <td><Clock format={'hh:mm:ss'} ticking={true} timezone={'Asia/Aden'} /></td>
                        </tr>
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