import { useEffect, useState } from 'react'

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
                <li className="dalWivesList" key={`dalWives-${i}`}> <img className="dalWivesImg" src={dalWives.img_url}/> {dalWives.first_name} {dalWives.last_name} </li>
        )})
    

    return (
        <div>
            <h1>The Real Housewives of Dallas</h1>
            <ul className="city-wives">
                {content}
            </ul>
        </div>
    )
  }
};

export default Dallas;