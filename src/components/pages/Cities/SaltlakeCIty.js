import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const SaltlakeCity = (props) => {

    const [salt, setSalt] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Salt Lake City`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
            .then(response => response.json())
            .then(jsonData => {
                setSalt((jsonData))
                console.log(jsonData)
            })
    }, [])

    if (salt.length < 1) {
        return (<h4>Content is loading</h4>)
    } else {
        let content = salt.db.map((slcWives, i) => {
            return (
                <li className="slcWivesList" key={`slcWives-${i}`}> 
                    <img className="slcWivesImg" src={slcWives.img_url} /> 
                    {slcWives.first_name} 
                    {slcWives.last_name} 
                    <form method="POST" action="/profile">
                        <input hidden type="text" name="first_name" value="{slcWives.first_name}"/>
                        <input hidden type="text" name="last_name" value="{slcWives.last_name"/>
                        <input hidden type="text" name="img_url" value="{slcWives.img_url}"/>
                        <button class="faveBtn" type="submit">ADD TO FAVORITES</button>
                    </form> 
                </li>
            )
        })


        return (
            <div className="city">
                <h1 className="cityHead"><b>The Real Housewives of Salt Lake City ❄️</b></h1>
                <div className="vidIntroPanel">
                    <div className="vid">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=Dr6aSTPzTt0"
                        />
                    </div>
                    <div className="cityIntro">
                        <h2 className="welcomeCity">Welcome to Salt Lake City, Bravo's latest introduction to the franchise in November of 2020.</h2>
                        <h3 className="welcomeCity">❄️ Salt Lake City: Where Mormons are doing all sorts of crazy shit.</h3>
                        <h3 className="welcomeCity">❄️ Where it's totally acceptable to marry your step-grandfather and start a cult.</h3>
                        <h3 className="welcomeCity">❄️ Where Heather Gay is queen, and that is that.</h3>
                        
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

export default SaltlakeCity;