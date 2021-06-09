import React from 'react';
import desc from '../img/pic.png'
import { Button, Card } from 'react-bootstrap';
import { MdTimeline, MdSupervisorAccount } from 'react-icons/md';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { Link } from "react-router-dom";



class Description extends React.Component {
    render() {
        return (
            <div>

                <div className='description'>
                    <div className='home-img'>
                        <img src={desc} alt='description'></img>
                    </div>
                    <div className='home-description'>
                        <h2>
                            What is ForexHub ?
                    </h2>
                        <p id="para-home">
                            ForexHub enables you to convert and discover hundreds of global currencies online in a secure, easy-to-use platform. We offer outstanding educational tools online, and a free demo account. Our Support Team is at your service 5-days a week, and our daily and weekly analysis keeps you abreast of the latest developments in the currencies state that you are interested in trading.

                            All of this and more at ForexHub.
            </p>
                    </div>
                </div>


                {/* marioooooooooom*/}
                <div className='container'>

                <div className="divCard">
                    <div>
                        <Card className="carddes" style={{ width: '18rem' }}>

                            <Card.Body>
                                <HiOutlineCurrencyDollar className="icons" />
                                <Card.Title className="cardTitel">Exchange</Card.Title>
                                <Card.Text className="cardText">
                                    You can convert any amount of money using a simple converter by choosing the currencies and entering the amount, this converter is based on hourly updated exchange rates.
                                     </Card.Text>
                                     <Link to="/convert">
                                         
                                <button className="testt1"> Exchange</button>
                                     </Link>
                              
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="carddes" style={{ width: '18rem' }}>

                            <Card.Body>
                                <MdTimeline className="icons" />
                                <Card.Title className="cardTitel">Live Updates</Card.Title>
                                <Card.Text className="cardText">
                                Use the table to see live updates on different currencies related to a base currency. The arrows show you the currently state of the currency during a period of time.                                     </Card.Text>
                               <a href="#live"><button className="testt2"> Live Updates</button>
                                   </a> 
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="carddes" style={{ width: '18rem' }}>

                            <Card.Body>
                                <MdSupervisorAccount className="icons" />
                                <Card.Title className="cardTitel">Join Us</Card.Title>

                                <Card.Text className="cardText">
                                    Sign up now and get your account ready on ForexHub for an easier and more dynamic experience, don't forget to give us your feedback using the Contact Us form!
                                    </Card.Text>
                               <a href="#join">

                                <button className="testt3" > Join Us</button>
                               </a>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
            </div>

        )
    }
}

export default Description;