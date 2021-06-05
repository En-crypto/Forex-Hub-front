import React from 'react';
import HeroImg from './img/Hero.jpg';
import slideTwo from './img/slider2.jpg'
import slideThree from './img/slider3.jpg'
import slideFour from './img/slider4.jpg'



import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel,Button } from 'react-bootstrap'


class Hero extends React.Component {

    render() {
        return (

            <div className='hero-section'>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100 slides"
                            src={HeroImg} 
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 slides"
                            src={slideTwo}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slides"
                            src={slideThree}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item  interval={10000}>
                        <img
                            className="d-block w-100 slides"
                            src={slideFour}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Button id="hero-btn" className='hero-btn' href='https://mohiesen.eu.auth0.com/u/signup?state=hKFo2SBEM0psRjcwYklEMGRxTVpaLXVpcmxxMHR1WDljbjZtaaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDMxSVc2UXZhcVU4M0ZaZTZhUHhMejJUeE5tWUVzZmtwo2NpZNkgN2Jwc0V5NE5SUjZFQlVhZWRZdXRtamNPajZKc1k0aDg'>Join Us</Button>

                </Carousel>
            </div>
        )
    }
}

export default Hero;
