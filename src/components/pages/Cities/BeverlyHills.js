import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const BeverlyHills = (props) => {

    const [beverly, setBeverly] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Beverly Hills`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
            .then(response => response.json())
            .then(jsonData => {
                setBeverly((jsonData))
                console.log(jsonData)
            })
    }, [])

    if (beverly.length < 1) {
        return (<h4>Content is loading</h4>)
    } else {
        let content = beverly.db.map((bevWives, i) => {
            return (
                <li className="bevWivesList" key={`bevWives-${i}`}> 
                    <img className="bevWivesImg" src={bevWives.img_url} /> 
                    {bevWives.first_name} 
                    {bevWives.last_name} 
                    <form method="POST" action="/profile">
                        <input hidden type="text" name="first_name" value="{bevWives.first_name}"/>
                        <input hidden type="text" name="last_name" value="{bevWives.last_name"/>
                        <input hidden type="text" name="img_url" value="{bevWives.img_url}"/>
                        <button class="faveBtn" type="submit">ADD TO FAVORITES</button>
                    </form> 
            </li>
            )
        })


        return (
            <div className="city">
                <h1 className="cityHead"><b>The Real Housewives of Beverly Hills 💎</b></h1>
                <div className="vidIntroPanel">
                    <div className="vid">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=Xd6loa0AsAs&t=37s"
                        />
                    </div>
                    <div className="cityIntro">
                        <h2 className="welcomeCity">Welcome to Beverly Hills, dahhling (said in LVP voice, of course). This franchise first premiered on Bravo in October of 2010, and our lives have never been the same.</h2>
                        <h3 className="welcomeCity">💎 From Kyle stealing Kim's god damn house, to things getting a little too real inside Taylor Armstrong's world.</h3>
                        <h3 className="welcomeCity">💎 From feeling sorry for "slut pig" Brandi Glanville to wanting her permanently off our screens.</h3>
                        <h3 className="welcomeCity">💎 From loving our favorite duo, to GOODBYE KYLE.</h3>
                        <h3 className="welcomeCity">💎 And let's not forget Lucy Lucy Apple Goosey and wondering if Denise Richards really did f*ck Brandi Glanville.</h3>
                        <h3 className="welcomeCity">💎 These ladies have given us all the glam, drama, and then some.</h3>
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

export default BeverlyHills;