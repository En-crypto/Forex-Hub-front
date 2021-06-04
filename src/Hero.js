import Button from 'react-bootstrap/Button';
import React from 'react';
import HeroImg from './img/Hero.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';


class Hero extends React.Component {

    render() {
        return (
            <div className='hero-section'>
                <img src ={HeroImg} alt='Hero' className= 'hero'/>
                <Button className='hero-btn' href='https://mohiesen.eu.auth0.com/u/signup?state=hKFo2SBEM0psRjcwYklEMGRxTVpaLXVpcmxxMHR1WDljbjZtaaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDMxSVc2UXZhcVU4M0ZaZTZhUHhMejJUeE5tWUVzZmtwo2NpZNkgN2Jwc0V5NE5SUjZFQlVhZWRZdXRtamNPajZKc1k0aDg'>Join Us</Button>
            </div>
        )
    }
}

export default Hero;
