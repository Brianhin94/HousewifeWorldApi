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
                <li key={`slcWives-${i}`}> {slcWives.first_name} {slcWives.last_name}</li>
        )})
    

    return (
        <div>
            <h1>Salt Lake City, UT</h1>
            <ul className="city-wives">
                {content}
            </ul>
        </div>
    )
  }
};

export default SaltlakeCity;