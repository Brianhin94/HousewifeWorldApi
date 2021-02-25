import { useEffect, useState } from 'react'


const Atlanta = (props) => {
    console.log(props)
    const [atlanta, setAtlanta] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Atlanta`)

    useEffect(() => {
        fetch(bravoUrl)
            .then(response => response.json())
            .then(jsonData => {
                setAtlanta((jsonData))
                console.log(jsonData)
            })
    }, [])

    if (atlanta.length < 1) {
        return (<h4>Content is loading</h4>)
    } else {
        let content = atlanta.db.map((atlWives, i) => {
            return (
                <li key={`atlWives-${i}`}> {atlWives.first_name} {atlWives.last_name}</li>
        )})
    

    return (
        <div>
            <h1>Atlanta, GA</h1>
            <ul className="city-wives">
                {content}
            </ul>
        </div>
    )
  }
};

export default Atlanta;