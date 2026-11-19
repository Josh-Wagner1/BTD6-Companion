import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Events = () => {
    return (
        <div className="app">
            <div>
                <Navbar />
            </div>

            <div className="content">
                <div className="box">
                    <h1>These aren't the monkeys you are looking for...</h1>
                    <p>Page is Invalid/doesn't exist</p>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Events