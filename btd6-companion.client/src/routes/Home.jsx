//import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

import Monkeys from '../assets/pageIcons/Monkeys.png';
import Heroes from '../assets/pageIcons/Heroes.png';
import Powers from '../assets/pageIcons/Powers.png';
import Maps from '../assets/pageIcons/Maps.png';
import Rounds from '../assets/pageIcons/Rounds.png';
import Cosmetics from '../assets/pageIcons/Cosmetics.png';
import Achievements from '../assets/pageIcons/Achievements.png';
import GiftCodes from '../assets/pageIcons/GiftCodes.png';
import UpdateArt from '../assets/updateArt/v57.jpg';

const Home = () => {
    return (
        <div className="app">
            <div>
                <Navbar />
            </div>

            <div className="content">
                <div className="box">
                    <h2>News</h2>
                    <div className="boxContent">
                        <ul>
                            <li>6th October 2026: <a href='https://www.reddit.com/r/btd6/comments/1wzgvfn/bloons_td_6_v570_update_notes/'>BTD6 Version 57.0 </a> - NEW Sniper monkey paragon: S.P.I.D.E.R Monkey, NEW map: Ship Capture, InstaMonkeys Overhaul</li>
                            <li>4th August 2026: <a href='https://www.reddit.com/r/btd6/comments/1vfommu/update_bloons_td_6_v560_update_notes/'>BTD6 Version 56.0 </a> - NEW Tower: Skywarden, NEW Map: Ascent, NEW Power Pro: Portable Lake</li>
                            <li>3rd June 2026: <a href='https://www.reddit.com/r/btd6/comments/1tv9904/bloons_td_6_v550_update_notes/'>BTD6 Version 55.0 </a> - NEW Hero: Dan DeMonkey, Final He-Man collab, NEW Map: Skull Peak</li>
                        </ul>
                        <img src={UpdateArt} width="200" height="200" alt='Update Art'></img>
                    </div>
                </div>

                <div className="box">
                    <h2>Browse</h2>
                    <div className="boxContent">
                        <div className="boxItem">
                            <img src={Monkeys} alt="Monkeys"></img>
                            <p>Monkeys</p>
                        </div>
                        <div className="boxItem">
                            <img src={Heroes} alt="Heroes"></img>
                            <p>Heroes</p>
                        </div>
                        <div className="boxItem">
                            <img src={Powers} alt="Powers"></img>
                            <p>Powers</p>
                        </div>
                        <div className="boxItem">
                            <img src={Maps} alt="Maps"></img>
                            <p>Maps</p>
                        </div>
                        <div className="boxItem">
                            <img src={Rounds} alt="Rounds"></img>
                            <p>Roundsets</p>
                        </div>
                        <div className="boxItem">
                            <img src={Cosmetics} alt="Cosmetics"></img>
                            <p>Cosmetics</p>
                        </div>
                        <div className="boxItem">
                            <img src={Achievements} alt="Achievements"></img>
                            <p>Achievements</p>
                        </div>
                        <div className="boxItem">
                            <img src={GiftCodes} alt="GiftCodes"></img>
                            <p>Gift Codes</p>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <h2>Events</h2>
                    <div className="boxContent">
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
