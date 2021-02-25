import { useEffect, useState } from 'react'

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
                <li className="slcWivesList" key={`slcWives-${i}`}> <img className="slcWivesImg" src={slcWives.img_url}/> {slcWives.first_name} {slcWives.last_name} </li>
        )})
    

    return (
        <div>
            <h1>The Real Housewives of Salt Lake City</h1>
            <ul className="city-wives">
                {content}
            </ul>
        </div>
    )
  }
};

export default SaltlakeCity;