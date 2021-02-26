import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

const Dallas = (props) => {

    const [dallas, setDallas] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Dallas`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
            .then(response => response.json())
            .then(jsonData => {
                setDallas((jsonData))
                console.log(jsonData)
            })
    }, [])

    if (dallas.length < 1) {
        return (<h4>Content is loading</h4>)
    } else {
        let content = dallas.db.map((dalWives, i) => {
            return (
                <li className="dalWivesList" key={`dalWives-${i}`}> 
                    <img className="dalWivesImg" src={dalWives.img_url} /> 
                    {dalWives.first_name} 
                    {dalWives.last_name} 
                    <form method="POST" action="/profile">
                        <input hidden type="text" name="first_name" value="{dalWives.first_name}"/>
                        <input hidden type="text" name="last_name" value="{dalWives.last_name"/>
                        <input hidden type="text" name="img_url" value="{dalWives.img_url}"/>
                        <button class="faveBtn" type="submit">ADD TO FAVORITES</button>
                    </form> 
                </li>
            )
        })


        return (
            <div className="city">
                <h1 className="cityHead"><b>The Real Housewives of Dallas 🌟</b></h1>
                <div className="vidIntroPanel">
                    <div className="vid">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=rKsAcI_761M"
                        />
                    </div>
                    <div className="cityIntro">
                        <h2 className="welcomeCity">Welcome to Dallas, y'all. This franchise first premiered on Bravo in April of 2016, and these ladies have not let us down.</h2>
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

export default Dallas;