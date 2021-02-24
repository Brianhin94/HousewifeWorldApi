import { useEffect, useState } from 'react'

const Dallas = (props) => {

    const [dallas, setDallas] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Dallas`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
        .then(response => response.json())
        .then(jsonData => {
            setDallas(Object.values(jsonData))
            console.log(jsonData)
        })
    }, [])

    return (
        <h1>Dallas, TX</h1>
    );
}

export default Dallas;