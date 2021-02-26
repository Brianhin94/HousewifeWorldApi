import { useEffect, useState } from 'react'

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
                <li className="ocWivesList" key={`ocWives-${i}`}> <img className="ocWivesImg" src={ocWives.img_url}/> {ocWives.first_name} {ocWives.last_name} <button className="faveBtn" type="submit">ADD TO FAVORITES</button> </li>
        )})
    

    return (
        <div>
            <h1>The Real Housewives of Orange County</h1>
            <ul className="city-wives">
                {content}
            </ul>
        </div>
    )
  }
};

export default OrangeCounty;