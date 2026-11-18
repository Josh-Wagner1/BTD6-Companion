//import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

import UpdateArt from '../assets/updateArt/v57.jpg';

const images = import.meta.glob(
    '../assets/pageIcons/*.{png,jpg,jpeg,svg}',
    {
        eager: true,
        import: 'default'
    }
);

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
                            <img src={images['../assets/pageIcons/Monkeys.png']} alt="Monkeys"></img>
                            <p>Monkeys</p>
                        </div>
                        <div className="boxItem">
                            <img src={images['../assets/pageIcons/Heroes.png']} alt="Heroes"></img>
                            <p>Heroes</p>
                        </div>
                        <div className="boxItem">
                            <img src={images['../assets/pageIcons/Powers.png']} alt="Powers"></img>
                            <p>Powers</p>
                        </div>
                        <div className="boxItem">
                            <img src={images['../assets/pageIcons/Maps.png']} alt="Maps"></img>
                            <p>Maps</p>
                        </div>
                        <div className="boxItem">
                            <img src={images['../assets/pageIcons/Cosmetics.png']} alt="Cosmetics"></img>
                            <p>Cosmetics</p>
                        </div>
                        <div className="boxItem">
                            <img src={images['../assets/pageIcons/Achievements.png']} alt="Achievements"></img>
                            <p>Achievements</p>
                        </div>
                    </div>

                    <div className="boxContent">
                        <div className="boxItem">
                            <img src={images['../assets/pageIcons/Knowledge.png']} alt="Knowledge"></img>
                            <p>Knowledge</p>
                        </div>
                        <div className="boxItem">
                            <img src={images['../assets/pageIcons/Legends.png']} alt="Legends"></img>
                            <p>Legends</p>
                        </div>
                        <div className="boxItem">
                            <img src={images['../assets/pageIcons/Quests.png']} alt="Quests"></img>
                            <p>Quests</p>
                        </div>
                        <div className="boxItem">
                            <img src={images['../assets/pageIcons/Rounds.png']} alt="Rounds"></img>
                            <p>Roundsets</p>
                        </div>
                        <div className="boxItem">
                            <img src={images['../assets/pageIcons/Teams.png']} alt="Teams"></img>
                            <p>Teams</p>
                        </div>
                        <div className="boxItem">
                            <img src={images['../assets/pageIcons/GiftCodes.png']} alt="GiftCodes"></img>
                            <p>Gift Codes</p>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <h2>Events</h2>
                    <div className="boxContent">
                        <h2>Active</h2>
                    </div>
                    <div className="boxContent">
                        <h2>Recent</h2>
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
