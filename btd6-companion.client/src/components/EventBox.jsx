import './EventBoxStyles.css';

const images = import.meta.glob(
    '../assets/eventIcons/*.{png,jpg,jpeg,svg}',
    {
        eager: true,
        import: 'default'
    }
);

const EventBox = () => {
    return (
        <div className='box'>
            <div className='boxTable'>
                <div className="headerCell">
                    <h2>Active</h2>
                </div>
                <div className="headerCell">
                    <h2></h2>
                </div>
                <div className="headerCell">
                    <h2></h2>
                </div>

                <div className="boxCell">
                    <img src={images['../assets/eventIcons/DreadbloonEventIcon.png']} alt="DreadbloonBoss" />
                    <h3>Dreadbloon</h3>
                </div>
                <div className="dateCell">
                    <h3>14/11/2026, 12pm</h3>
                    <h3>20/11/2026, 1pm</h3>
                </div>
                <div className="boxCell">
                    <h3>Ongoing</h3>
                </div>

                <div className="boxCell">
                    <img src={images['../assets/eventIcons/OdysseyEvent.png']} alt="OdysseyEvent" />
                    <h3>Odyssey Event</h3>
                </div>
                <div className="dateCell">
                    <h3>19/11/2026, 12pm</h3>
                    <h3>24/11/2026, 1pm</h3>
                </div>
                <div className="boxCell">
                    <h3>Ongoing</h3>
                </div>

                <div className="boxCell">
                    <img src={images['../assets/eventIcons/DreadbloonEventIcon.png']} alt="DreadbloonBoss" />
                    <h3>Dreadbloon</h3>
                </div>
                <div className="dateCell">
                    <h3>14/11/2026, 12pm</h3>
                    <h3>19/11/2026, 1pm</h3>
                </div>
                <div className="boxCell">
                    <h3>Ongoing</h3>
                </div>
            </div>
        </div>
    )
}

export default EventBox;
