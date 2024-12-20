import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

 const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt' options={{ max : 55 }} style={{ height: 150, width: 150 }}>
                <div className='Tilt-inner pa3'>
                    <img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;
ReactDOM.render(<Logo />, document.getElementById('root'));