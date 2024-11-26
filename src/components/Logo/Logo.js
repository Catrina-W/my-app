import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import './Logo.css';

 const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt>
                <div style={{ height: '300px', backgroundColor: 'darkgreen' }}>
                    <h1>React Parallax Tilt 👀</h1>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;
ReactDOM.render(<Logo />, document.getElementById('root'));