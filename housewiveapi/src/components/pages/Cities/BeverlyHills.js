import { useEffect, useState } from 'react'

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
                <li key={`bevWives-${i}`}> {bevWives.first_name} {bevWives.last_name} <img src={bevWives.img_url}/> </li>
        )})
    

    return (
        <div>
            <h1>Beverly Hills, CA</h1>
            <ul className="city-wives">
                {content}
            </ul>
        </div>
    )
  }
};

export default BeverlyHills;