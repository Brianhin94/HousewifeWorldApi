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
                <li className="jerseyWivesList" key={`jerseyWives-${i}`}> <img className="jerseyWivesImg" src={jerseyWives.img_url} /> {jerseyWives.first_name} {jerseyWives.last_name} <button className="faveBtn" type="submit">ADD TO FAVORITES</button> </li>
            )
        })


        return (
            <div>
                <h1 className="cityHead"><b>The Real Housewives of New Jersey 🍷🍝</b></h1>
                <div className="vidIntroPanel">
                    <div className="vid">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=-QCs-g0aMKQ"
                        />
                    </div>
                    <div className="cityIntro">
                        <h2 className="welcomeCity">Welcome to Jersey, friends. Where the tans are orange and the vocabulary is elementary. This franchise first premiered on Bravo in May of 2009, and our lives have never been the same.</h2>
                    </div>
                </div>
                <ul className="city-wives">
                    {content}
                </ul>
            </div>
        )
    }
};

export default NewJersey;