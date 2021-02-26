import { Link } from 'react-router-dom';


const Housewifemuseum = (props) => {
    let crown = '/images/crown.png';
    return (
        <div className="container">
            <h1 className="main-header">Welcome to the Real Museum of Real Housewives</h1>
            <h2 className="main-p">Do you love Bravo as much as we do? Of course you do. Why else would you be here?</h2> <br></br>
            <h3 className="main-instruct">Click on our STUNNING map below if you'd like to be directed to the bravotv.com webpage, where you can watch full episodes.</h3>
            <h3 className="main-instruct">Hit the crown icon on each city to virtually transport you to your favorite Bravo cities so you can visit with your favorite, <br></br> and least favorite (<i>looking at you, Candiace Dillard-Bassett</i>), housewives.</h3> <br></br>
            <div className="bravo-map">
                <iframe className="map" width="768" height="576" src="https://maphub.net/embed/126829?legend=1&panel=1&panel_closed=1" style={{frameBorder: 0}}></iframe>
            </div>
            <div className="home-cities">
                <ul className="cities-list">
                    <Link className="city-list" to='/cities/dallas'><img className="bullet" src={crown} />The Real Housewives of Dallas</Link>
                    <Link className="city-list" to='/cities/newjersey'><img className="bullet" src={crown} />The Real Housewives of New Jersey</Link>
                    <Link className="city-list" to='/cities/beverlyhills'><img className="bullet" src={crown} />The Real Housewives of Beverly Hills</Link>
                    <Link className="city-list" to='/cities/newyork'><img className="bullet" src={crown} />The Real Housewives of New York City</Link>
                    <Link className="city-list" to='/cities/orangecounty'><img className="bullet" src={crown} />The Real Housewives of Orange County</Link>
                    <Link className="city-list" to='/cities/potomac'><img className="bullet" src={crown} />The Real Housewives of Potomac</Link>
                    <Link className="city-list" to='/cities/atlanta'><img className="bullet" src={crown} /> The Real Housewives of Atlanta</Link>
                    <Link className="city-list" to='/cities/saltlakecity'><img className="bullet" src={crown} />The Real Housewives of Salt Lake City</Link>
                </ul>
            </div>
            {/* <div className="crown-atlanta">
                <img src={crown} className="crown-img" />
            </div>
            <div className="crown-bh">
                <img src={crown} className="crown-img" />
            </div>
            <div className="crown-dallas">
                <img src={crown} className="crown-img" />
            </div>
            <div className="crown-nj">
                <img src={crown} className="crown-img" />
            </div>
            <div className="crown-ny">
                <img src={crown} className="crown-img" />
            </div>
            <div className="crown-oc">
                <img src={crown} className="crown-img" />
            </div>
            <div className="crown-potomac">
                <img src={crown} className="crown-img" />
            </div>
            <div className="crown-slc">
                <img src={crown} className="crown-img" />
            </div> */}
        </div>
    );
}

export default Housewifemuseum;