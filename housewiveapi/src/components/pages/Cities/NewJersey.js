import { useEffect, useState } from 'react'

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
                <li className="jerseyWivesList" key={`jerseyWives-${i}`}> <img className="jerseyWivesImg" src={jerseyWives.img_url} /> {jerseyWives.first_name} {jerseyWives.last_name} </li>
            )
        })


        return (
            <div>
                <h1>The Real Housewives of New Jersey</h1>
                <ul className="city-wives">
                    {content}
                </ul>
            </div>
        )
    }
};

export default NewJersey;