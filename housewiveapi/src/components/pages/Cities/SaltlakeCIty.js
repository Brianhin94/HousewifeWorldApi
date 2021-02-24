import { useEffect, useState } from 'react'

const SaltlakeCity = (props) => {

    const [salt, setSalt] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Salt Lake City`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
        .then(response => response.json())
        .then(jsonData => {
            setSalt(Object.values(jsonData))
            console.log(jsonData)
        })
    }, [])

    return (
        <h1>Salt Lake City</h1>
    );
}

export default SaltlakeCity;