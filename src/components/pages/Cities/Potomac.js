import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const Potomac = (props) => {

    const [potomac, setPotomac] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Potomac`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
            .then(response => response.json())
            .then(jsonData => {
                setPotomac((jsonData))
                console.log(jsonData)
            })
    }, [])

    if (potomac.length < 1) {
        return (<h4>Content is loading</h4>)
    } else {
        let content = potomac.db.map((potWives, i) => {
            return (
                <li className="potWivesList" key={`potWives-${i}`}> 
                    <img className="potWivesImg" src={potWives.img_url} /> 
                    <p className="wifeName">{potWives.first_name} {potWives.last_name}</p>
                    <form method="POST" action="/profile">
                        <input hidden type="text" name="first_name" value="{potWives.first_name}"/>
                        <input hidden type="text" name="last_name" value="{potWives.last_name"/>
                        <input hidden type="text" name="img_url" value="{potWives.img_url}"/>
                        <button class="faveBtn" type="submit">ADD TO FAVORITES</button>
                    </form> 
                </li>
            )
        })


        return (
            <div className="city">
                <h1 className="cityHead"><b>The Real Housewives of Potomac 🥂</b></h1>
                <div className="vidIntroPanel">
                    <div className="vid">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=ciuqy7lKb7E"
                        />
                    </div>
                    <div className="cityIntro">
                        <h2 className="welcomeCity"><b>Welcome to Potomac, where proper etiquette is a must. This franchise first premiered on Bravo in January of 2016, and if you are not #TEAMMONIQUE, you can see yourself out.</b></h2>
                        <h3 className="welcomeCity">🥂 Potomac: Where the stakes are high, but the tensions are higher.</h3>
                        <h3 className="welcomeCity">🥂 Where we hold our own press conferences to address drama, and also run at people with butter knives.</h3>
                        <h3 className="welcomeCity">🥂 Where everybody thinks they can host a gala, but very few actually can.</h3>
                        <h3 className="welcomeCity">🥂 Where the best wig wins, and WE ARE SO GLAD JUAN DIXON IS NOT HERE RIGHT NOW.</h3>
                        <h4 className="welcomeCity"><i>*Just kidding, who doesn't want to stare at Juan all day?*</i></h4>
                        <h3 className="welcomeCity">🥂 Where Michael Darby just can't stop grabbing mens' butts. Period. End sentence.</h3>
                        <h3 className="welcomeCity">🥂 Where if you ask to get dragged, you better believe you're gonna get dragged, honey.</h3>

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

export default Potomac;