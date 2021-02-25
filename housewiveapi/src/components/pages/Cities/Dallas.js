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
                <li key={`dalWives-${i}`}> {dalWives.first_name} {dalWives.last_name}</li>
        )})
    

    return (
        <div>
            <h1>Dallas, TX</h1>
            <ul className="city-wives">
                {content}
            </ul>
        </div>
    )
  }
};

export default Dallas;