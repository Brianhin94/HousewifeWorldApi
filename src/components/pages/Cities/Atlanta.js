import { useEffect, useState } from 'react';
import ReactPlayer from "react-player";
import Fave from '../../Fave';
import axios from 'axios';
import HousewifeCard from '../../partials/HousewifeCard';

const Atlanta = (props) => {
    const [isShown, setIsShown] = useState(false);
    console.log(props)
    const [atlanta, setAtlanta] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Atlanta`)

    useEffect(() => {
        fetch(bravoUrl)
            .then(response => response.json())
            .then(jsonData => {
                setAtlanta((jsonData))
                console.log(jsonData)
            })
    }, [])

    const [favorite, setFavorite] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        axios.post('/profile' , favorite)
        .then(response => {
          response.json()
          console.log(response)
        }) 
        .then(jsonData => {
          setFavorite((jsonData))
        })
      }

    if (atlanta.length < 1) {
        return (<h4>Content is loading</h4>)
    } else {
        let content = atlanta.db.map((atlWives, i) => {
            return (
                <li className="atlWivesList" key={`atlWives-${i}`}> 
                    <img 
                        className="atlWivesImg" 
                        src={atlWives.img_url} 
                        key={i}
                        onMouseOver={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                    />
                    {isShown && (
                        <div>
                        <HousewifeCard />
                            <Fave />
                        </div>
                    )} 
                    <p className="wifeName">{atlWives.first_name} {atlWives.last_name}</p>
                    <form method="POST" action="/profile">
                        <input hidden type="text" name="first_name" value="{atlWives.first_name}"/>
                        <input hidden type="text" name="last_name" value="{atlWives.last_name"/>
                        <input hidden type="text" name="img_url" value="{atlWives.img_url}"/>
                        <button class="faveBtn" type="submit">ADD TO FAVORITES</button>
                    </form> 
                </li>
            )
        })


        return (
            <div className="city">
                <h1 className="cityHead"><b>The Real Housewives of Atlanta 🍑</b></h1>
                <div className="vidIntroPanel">
                    <div className="vid">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=DyrQeVQWK4o"
                        />
                    </div>
                    <div className="cityIntro">
                        <h2 className="welcomeCity"><b>Welcome to Atlanta. This franchise first premiered on Bravo in October of 2008, and our lives have never been the same.</b></h2>
                        <h3 className="welcomeCity">🍑 BLOOP</h3>
                        <h3 className="welcomeCity">🍑 BYE WIG</h3>
                        <h3 className="welcomeCity">🍑 DON'T BE TARDY TO THE PARTY</h3>
                        <h3 className="welcomeCity">🍑 WHO F*CKED BOLO?!</h3>
                        <h4 className="welcomeCity"><i>Porsha: We're looking at you, girl.</i></h4>
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

export default Atlanta;