import { useEffect, useState } from 'react'

const NewYork = (props) => {

    const [york, setYork] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=New York City`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
            .then(response => response.json())
            .then(jsonData => {
                setYork((jsonData))
                console.log(jsonData)
            })
    }, [])

    if (york.length < 1) {
        return (<h4>Content is loading</h4>)
    } else {
        let content = york.db.map((nycWives, i) => {
            return (
                <li className="nycWivesList" key={`nycWives-${i}`}> <img className="nycWivesImg" src={nycWives.img_url} /> {nycWives.first_name} {nycWives.last_name} <button className="faveBtn" type="submit">ADD TO FAVORITES</button> </li>
            )
        })


        return (
            <div>
                <h1>The Real Housewives of New York City</h1>
                <ul className="city-wives">
                    {content}
                </ul>
            </div>
        )
    }
};

export default NewYork;