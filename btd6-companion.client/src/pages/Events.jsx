import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import EventBox from '../components/EventBox.jsx';

const images = import.meta.glob(
    '../assets/eventIcons/*.{png,jpg,jpeg,svg}',
    {
        eager: true,
        import: 'default'
    }
);

const Events = () => {
    return (
        <div className="app">
            <div>
                <Navbar />
            </div>

            <div className="content">
                <EventBox />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Events