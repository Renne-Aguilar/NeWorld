import React from 'react'
import '../Style/Welcome.css'
import { Link } from 'react-router-dom'


function Welcome() {
    return (
        <div className="welcome">
            <div className="container">
                <h2>Show your favorite NFTs
                on NeWorld</h2>
                <h3>Welcome to the future, bro👋🏻</h3>
                <h4>Here, we display our Crypto Art. Connect with other wonderful artists.</h4>

                <div className="button">
                <Link to="/home">
                <button className="welcome_button">Let´s get Started</button>
                </Link>
                </div>
                
            </div>
        </div>
    )
}

export default Welcome
