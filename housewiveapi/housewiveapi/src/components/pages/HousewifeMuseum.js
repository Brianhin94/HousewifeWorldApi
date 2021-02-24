import img from '../images/bravomap.png';
import crown from '../images/crown.png';

const Housewifemuseum = (props) => {
    return (
        <div className="container">
            <h1>Welcome to the Real Museum of Real Housewives</h1>
            <h2>Do you love Bravo as much as we do? Of course you do.</h2>
            <h3>Hit the crown icon on each city to virtually transport you to your favorite Bravo cities</h3>
            <h3>so you can visit with your favorite (and least favorite...looking at you, Candiace Dillard-Bassett) housewives.</h3>
            <iframe width="768" height="576" src="https://maphub.net/embed/126829?legend=1&panel=1&panel_closed=1" frameborder="0"></iframe>
            <div className="crown-atlanta">
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
            </div>
        </div>
    );
}

export default Housewifemuseum;