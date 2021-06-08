import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Jumbotron, Container } from 'react-bootstrap';
import HaneenImg from './img/haneen.jpeg';
import MotasimImg from './img/motasim.png';
import AlaaImg from './img/Alaa.jpeg';
import MaryamImg from './img/maryam.jpeg';
import MohammedImg from './img/mohammed.jpg';
// import './css/App.css';
import './css/AboutUs.css';
import { SocialIcon } from 'react-social-icons';
import { Row, Col } from 'react-bootstrap';


class AboutUs extends React.Component {
    render() {
        return (
            <div className='img-cards'>
                <div className='jumb'>
                    <Jumbotron fluid id="team-intro">
                        <Container>
                            <h1>Meet Our Team</h1>
                            <p id='para'>
                            we are a sincere company with a straightforward vision . we believe that there is an amazing amount to be learned by working in the "real world" web production environment,alongside other like minded teens .<br></br>
                            <br></br>
with this in mind we began to gather people together in 2021 ,from there the group quickly expanded to 5 members and we decided upon the name "ForxHuB" after a slow start we found five solid dedicated members who are in group today.
                        </p>
                        </Container>
                    </Jumbotron>
                </div>

                <div id='img-cards1'>
                    <Card className='img-card' style={{ width: '18rem' }}>
                        <Row   >

                            <Card.Img variant="top" src={AlaaImg} alt="AlaaImg" className="card-img" />

                        </Row>

                        <Row className='nameR'>

                            <Card.Body>


                                <Card.Title className='name'>Alaa <br></br> Abu Isaa</Card.Title>

                                <Card.Text>
                                    <Row>

                                        <h6>Civil Engineer</h6>
                                    </Row>

                                    <Row>

                                        <Col style={{ border: 'none' }}>
                                            <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/alaa-abu-issa-53a211172/" />
                                        </Col>
                                        <Col style={{ border: 'none' }}>
                                            <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://www.facebook.com/alaaabuissa" />
                                        </Col>
                                        <Col style={{ border: 'none' }}>
                                            <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} network="github" url="https://github.com/Haneenabonser" />
                                        </Col>


                                    </Row>
                                </Card.Text>

                            </Card.Body>
                        </Row>
                    </Card>

                    <Card className='img-card' style={{ width: '18rem' }}>
                        <Row   >

                            <Card.Img variant="top" src={HaneenImg} alt="haneenImg" className="card-img" />

                        </Row>

                        <Row className='nameR'>

                            <Card.Body>


                                <Card.Title className='name'>Haneen <br></br> Abonser</Card.Title>

                                <Card.Text>
                                    <Row>

                                        <h6>Civil Engineer</h6>
                                    </Row>

                                    <Row>

                                        <Col style={{ border: 'none' }}>
                                            <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://linkedin.com/in/haneen-abonser" />
                                        </Col>
                                        <Col style={{ border: 'none' }}>
                                            <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://web.facebook.com/haneen.abonser" />
                                        </Col>
                                        <Col style={{ border: 'none' }}>
                                            <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} network="github" url="https://github.com/Alaa-AbuIssa" />
                                        </Col>


                                    </Row>
                                </Card.Text>

                            </Card.Body>
                        </Row>
                    </Card>

                    <Card className='img-card' style={{ width: '18rem' }}>
                        <Row   >

                            <Card.Img variant="top" src={MaryamImg} alt="MaryamImg" className="card-img" />

                        </Row>

                        <Row className='nameR'>

                            <Card.Body>


                                <Card.Title className='name'>Maryam <br></br> Al-Najjar</Card.Title>

                                <Card.Text>
                                    <Row>

                                        <h6>Business Economics</h6>
                                    </Row>

                                    <Row>

                                        <Col style={{ border: 'none' }}>
                                            <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/maryam-najjar-112a98161 " />
                                        </Col>
                                        <Col style={{ border: 'none' }}>
                                            <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://www.facebook.com/mariam.alnajjar.142" />
                                        </Col>
                                        <Col style={{ border: 'none' }}>
                                            <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} network="github" url="https://github.com/Maryam-n98" />
                                        </Col>


                                    </Row>
                                </Card.Text>

                            </Card.Body>
                        </Row>
                    </Card>

                </div>

                <div id='img-cards2'>
                    <Card className='img-card' style={{ width: '18rem' }}>
                        <Row   >

                            <Card.Img variant="top" src={MohammedImg} alt="AlaaImg" className="card-img" />

                        </Row>

                        <Row className='nameR'>

                            <Card.Body>


                                <Card.Title className='name'>Mohammad <br></br> Moheisen</Card.Title>

                                <Card.Text>
                                    <Row>

                                        <h6>Java Developer</h6>
                                    </Row>

                                    <Row>

                                        <Col style={{ border: 'none' }}>
                                            <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/alaa-abu-issa-53a211172/" />
                                        </Col>
                                        <Col style={{ border: 'none' }}>
                                            <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://www.facebook.com/alaaabuissa" />
                                        </Col>
                                        <Col style={{ border: 'none' }}>
                                            <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} network="github" url="https://github.com/mmohiesen96" />
                                        </Col>


                                    </Row>
                                </Card.Text>

                            </Card.Body>
                        </Row>
                    </Card>

                    <Card className='img-card' style={{ width: '18rem' }}>
                        <Row   >

                            <Card.Img variant="top" src={MotasimImg} alt="MotasimImg" className="card-img" />

                        </Row>

                        <Row className='nameR'>

                            <Card.Body>


                                <Card.Title className='name'>Motasim <br></br> Al-azzam</Card.Title>

                                <Card.Text>
                                    <Row>

                                        <h6>Mechanical Engineer</h6>
                                    </Row>

                                    <Row>

                                        <Col style={{ border: 'none' }}>
                                            <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/mo-tasim-al-azzam-3543b51a2/" />
                                        </Col>
                                        <Col style={{ border: 'none' }}>
                                            <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} url="https://web.facebook.com/profile.php?id=100003494264820" />
                                        </Col>
                                        <Col style={{ border: 'none' }}>
                                            <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} network="github" url="https://github.com/motasimalazzam" />
                                        </Col>


                                    </Row>
                                </Card.Text>

                            </Card.Body>
                        </Row>
                    </Card>
                </div>
            </div>



        )
    }
}

export default AboutUs;