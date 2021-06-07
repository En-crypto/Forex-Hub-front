import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Jumbotron,Container} from 'react-bootstrap';
import HaneenImg from './img/haneen.jpeg';
import MotasimImg from './img/motasim.png';
import AlaaImg from './img/Alaa.jpeg';
import MaryamImg from './img/maryam.jpeg';
import './css/App.css';
import { SocialIcon } from 'react-social-icons';


class AboutUs extends React.Component {
    render() {
        return (
            <div className='img-cards'>
                <div className='jumb'>
                <Jumbotron fluid id="team-intro">
                    <Container>
                        <h1>Meet Our Team</h1>
                        <p>
                            This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.
                        </p>
                    </Container>
                </Jumbotron>
                </div>
                <div id='img-cards1'>
                    <Card className='img-card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={AlaaImg} alt="AlaaImg" className="card-img" />
                        <Card.Body>
                            <Card.Title>Alaa Abu Isaa</Card.Title>
                            <Card.Text>
                                <h6>Civil Engineer</h6>
                                <SocialIcon id='social-icon' url="https://www.linkedin.com/in/alaa-abu-issa-53a211172/" />
                                <SocialIcon className='social-icon' url="https://www.facebook.com/alaaabuissa" />
                                <SocialIcon className='social-icon' network="github" url="https://github.com/Alaa-AbuIssa" />
                            </Card.Text>
                        </Card.Body>
                    </Card>


                    <Card className='img-card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={HaneenImg} alt="haneenImg" className="card-img" />
                        <Card.Body>
                            <Card.Title>Haneen Abonser</Card.Title>
                            <Card.Text>
                                <h6>Civil Engineer</h6>
                                <SocialIcon url="https://linkedin.com/in/haneen-abonser" />
                                <SocialIcon url="https://web.facebook.com/haneen.abonser" />
                                <SocialIcon network="github" url="https://github.com/Haneenabonser" />
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='img-card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={MaryamImg} alt="MaryamImg" className="card-img" />
                        <Card.Body>
                            <Card.Title>Maryam Al-Najjar</Card.Title>
                            <Card.Text>
                                <h6>Business Economics</h6>
                                <SocialIcon url="https://www.facebook.com/mariam.alnajjar.142" />
                                <SocialIcon url="https://www.linkedin.com/in/maryam-najjar-112a98161" />
                                <SocialIcon network="github" url="https://github.com/Maryam-n98" />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div id='img-cards2'>
                    <Card className='img-card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={HaneenImg} alt="haneenImg" className="card-img" />
                        <Card.Body>
                            <Card.Title>Mohammad Moheisen</Card.Title>
                            <Card.Text>
                                <h6>Java Developer</h6>
                                <SocialIcon url="https://linkedin.com/in/haneen-abonser" />
                                <SocialIcon url="https://web.facebook.com/haneen.abonser" />
                                <SocialIcon network="github" url="https://github.com/Haneenabonser" />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='img-card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={MotasimImg} alt="MotasimImg" className="card-img" />
                        <Card.Body>
                            <Card.Title>Motasim Al-azzam</Card.Title>
                            <Card.Text>
                                <h6>Mechanical Engineer</h6>
                                <SocialIcon url="https://www.linkedin.com/in/mo-tasim-al-azzam-3543b51a2/" />
                                <SocialIcon url="https://web.facebook.com/profile.php?id=100003494264820" />
                                <SocialIcon network="github" url="https://github.com/motasimalazzam" />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>


            </div>



        )
    }
}

export default AboutUs;