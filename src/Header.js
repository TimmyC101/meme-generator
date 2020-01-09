import React from 'react'
import './Header.css';

function Header() {
    return(
        <header>
            <div className="flexbox">
                <img 
                    src="http://pngall.com/wp-content/uploads/2016/05/Trollface.png"
                    alt="Problem?"
                />
                <div>Meme Generator</div>
            </div>
        </header>
    )
}

export default Header;