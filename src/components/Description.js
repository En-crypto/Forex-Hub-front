import React from 'react';
import desc from '../img/desc.jpeg'

class Description extends React.Component {
    render() {
        return (

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
        )
    }
}

export default Description;