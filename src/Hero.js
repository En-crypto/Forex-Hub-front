import React from 'react';
import banner from './img/banner.png';
import LoginButton from './LoginButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Hero.css';

class Hero extends React.Component {

    render() {
        return (

            <div className='hero-section'>
                <div className='intro'>
                    <h2 id="join">
                        Platform for currency traders
                    </h2>
                    <p>
                        Join Us Now to Access all the features
                    </p>
                    <LoginButton />
                </div>
                <div className = 'banner'>

                    <img src = {banner} alt = 'banner'>
                    </img>

                </div>
            </div>
        )
    }
}

export default Hero;
