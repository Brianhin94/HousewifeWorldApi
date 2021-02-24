import { useEffect, useState } from 'react'

const OrangeCounty = (props) => {

    const [orange, setOrange] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Orange County`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
        .then(response => response.json())
        .then(jsonData => {
            setOrange(Object.values(jsonData))
            console.log(jsonData)
        })
    }, [])

    return (
        <h1>Orange County, CA</h1>
    );
}

export default OrangeCounty;