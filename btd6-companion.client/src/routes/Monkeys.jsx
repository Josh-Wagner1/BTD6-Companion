//import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Monkeys = () => {
    return (
        <div className="app">
            <div>
                <Navbar />
            </div>

            <div className="content">
                <h1>Dart Monkey</h1>
                <p>Sample text</p>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Monkeys