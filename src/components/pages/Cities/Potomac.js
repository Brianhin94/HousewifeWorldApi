import { useEffect, useState } from 'react'

const Potomac = (props) => {

    const [potomac, setPotomac] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Potomac`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
            .then(response => response.json())
            .then(jsonData => {
                setPotomac((jsonData))
                console.log(jsonData)
            })
    }, [])

    if (potomac.length < 1) {
        return (<h4>Content is loading</h4>)
    } else {
        let content = potomac.db.map((potWives, i) => {
            return (
                <li className="potWivesList" key={`potWives-${i}`}> <img className="potWivesImg" src={potWives.img_url} /> {potWives.first_name} {potWives.last_name} </li>
            )
        })


        return (
            <div>
                <h1>The Real Housewives of Potomac</h1>
                <ul className="city-wives">
                    {content}
                </ul>
            </div>
        )
    }
};

export default Potomac;