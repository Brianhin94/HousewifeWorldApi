import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import jwt_decode from 'jwt-decode';
import { Redirect } from 'react-router-dom'

const Dallas = (props) => {
    const [data, setData] = useState({});
    const [dallas, setDallas] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Dallas`)
    const [redirect, setRedirect] = useState(false)
    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
            .then(response => response.json())
            .then(jsonData => {
                setDallas((jsonData))
                console.log(jsonData)
            })
    }, [])


    let favePost = (e) => {
        e.preventDefault();
      //  console.log(e)
        const decoded = jwt_decode(localStorage.getItem('jwtToken'));
      //  console.log(decoded)
        let data = ({
            first_name: e.target.form[0].defaultValue,
            last_name: e.target.form[1].defaultValue,
            img_url: e.target.form[2].defaultValue
        }
        )
        axios.post(`${process.env.REACT_APP_SERVER_URL}` + "/user/profile", data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': decoded
            }
            //
        })
        //console.log("axios-post")
        .then(response => {
                console.log("hello redirect true!")
              //  setRedirect(true)
            }
            )
            //console.log("after.then")
            setRedirect(true)
    }


    if (redirect === true) {
        return <Redirect to='/profile' />
    }


    if (dallas.length < 1) {
        return (<h4>Content is loading</h4>)
    } else {
        let content = dallas.db.map((dalWives, i) => {
            return (
                <li className="dalWivesList" key={`dalWives-${i}`}>
                    <img className="dalWivesImg" src={dalWives.img_url} />
                    <p className="wifeName">{dalWives.first_name} {dalWives.last_name}</p>
                    <form>
                        <input hidden type="text" name="first_name" value={dalWives.first_name} />
                        <input hidden type="text" name="last_name" value={dalWives.last_name} />
                        <input hidden type="text" name="img_url" value={dalWives.img_url} />
                        <button onClick={(e) => favePost(e) } class="faveBtn" type="submit">ADD TO FAVORITES</button>
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
                        <h2 className="welcomeCity"><b>Welcome to Dallas, y'all. This franchise first premiered on Bravo in April of 2016, and these ladies have not let us down.</b></h2>
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