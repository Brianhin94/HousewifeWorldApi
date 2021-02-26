import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const OrangeCounty = (props) => {

    const [orange, setOrange] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Orange County`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
            .then(response => response.json())
            .then(jsonData => {
                setOrange((jsonData))
                console.log(jsonData)
            })
    }, [])

    if (orange.length < 1) {
        return (<h4>Content is loading</h4>)
    } else {
        let content = orange.db.map((ocWives, i) => {
            return (
                <li className="ocWivesList" key={`ocWives-${i}`}> <img className="ocWivesImg" src={ocWives.img_url} /> {ocWives.first_name} {ocWives.last_name} <button className="faveBtn" type="submit">ADD TO FAVORITES</button> </li>
            )
        })


        return (
            <div className="city">
                <h1 className="cityHead"><b>The Real Housewives of Orange County 🍊</b></h1>
                <div className="vidIntroPanel">
                    <div className="vid">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=BKH92qRi7Js"
                        />
                    </div>
                    <div className="cityIntro">
                        <h2 className="welcomeCity">Welcome to Orange County. This was the first Real Housewives franchise ever. It premiered on Bravo in March of 2006, and we hate to admit it, but we miss Tamra.</h2>
                        <h3 className="welcomeCity">🍊 OC: Where nobody should get stuck in a family van.</h3>
                        <h4 className="welcomeCity"><i>Or anywhere with K*lly D*dd, for that matter.</i></h4>
                        <h3 className="welcomeCity">🍊 Where the boob jobs and drama are endless, but the friendships are not.</h3>
                        <h3 className="welcomeCity">🍊 Where Vicki faked cancer, but don't you dare call her a con woman.</h3>
                        <h3 className="welcomeCity">😷 Where COVID apparently just doesn't exist, so stay away until late 2021.</h3>
                    </div>
                </div>
                <div className="grid">
                    <ul className="city-wives">
                        {content}
                    </ul>
                </div>
            </div>
        )
    }
};

export default OrangeCounty;