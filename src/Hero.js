import Button from 'react-bootstrap/Button';
import React from 'react';
import HeroImg from './img/Hero.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';


class Hero extends React.Component {

    render() {
        return (
            <div className='hero-section'>
                <img src ={HeroImg} alt='Hero' className= 'hero'/>
                <Button className='hero-btn'>Join Us</Button>
            </div>
        )
    }
}

export default Hero;
