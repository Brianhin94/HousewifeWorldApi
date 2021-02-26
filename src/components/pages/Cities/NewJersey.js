import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

const NewJersey = (props) => {

    const [jersey, setJersey] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=New Jersey`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
            .then(response => response.json())
            .then(jsonData => {
                setJersey((jsonData))
                console.log(jsonData)
            })
    }, [])

    if (jersey.length < 1) {
        return (<h4>Content is loading</h4>)
    } else {
        let content = jersey.db.map((jerseyWives, i) => {
            return (
                <li className="jerseyWivesList" key={`jerseyWives-${i}`}> 
                    <img className="jerseyWivesImg" src={jerseyWives.img_url} /> 
                    <p className="wifeName">{jerseyWives.first_name} {jerseyWives.last_name}</p> 
                    <form method="POST" action="/profile">
                        <input hidden type="text" name="first_name" value="{jerseyWives.first_name}"/>
                        <input hidden type="text" name="last_name" value="{jerseyWives.last_name"/>
                        <input hidden type="text" name="img_url" value="{jerseyWives.img_url}"/>
                        <button class="faveBtn" type="submit">ADD TO FAVORITES</button>
                    </form> 
                </li>
            )
        })


        return (
            <div className="city">
                <h1 className="cityHead"><b>The Real Housewives of New Jersey 🍷🍝</b></h1>
                <div className="vidIntroPanel">
                    <div className="vid">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=-QCs-g0aMKQ"
                        />
                    </div>
                    <div className="cityIntro">
                        <h2 className="welcomeCity"><b>Welcome to Jersey, friends. Where the tans are orange and the vocabulary is elementary. This franchise first premiered on Bravo in May of 2009, and our love for Jersey has only grown since.</b></h2>
                        <h3 className="welcomeCity">🍷 From Prostitution Whores and flipping tables on said PW's, to glasses being thrown and husbands in the pool.</h3>
                        <h3 className="welcomeCity">🍷 From the families who feud, to the families that are thick as thieves.</h3>
                        <h3 className="welcomeCity">🍷 Just know...</h3>
                        <h3 className="welcomeCity"><i>You can change your face, you can change your address, you can change your clothes, but you haven't changed your soul.</i></h3>
                        <h3 className="welcomeCity"><i>You can change your name, but you're still that Beverly inside.</i></h3>
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

export default NewJersey;