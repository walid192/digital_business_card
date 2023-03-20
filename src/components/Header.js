import React from 'react'
import face from '../Images/sukuna.jpg';
import '../Styles/headerComponent.css'

function Header(){
    return(
        <div className='image_container'>
            <img className='sukuna' src={face} alt="face image" />
        </div>
    );
}


export default Header;