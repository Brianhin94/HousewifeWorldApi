import { useEffect, useState } from 'react'

const NewYork = (props) => {

    const [york, setYork] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=New York City`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
        .then(response => response.json())
        .then(jsonData => {
            setYork(Object.values(jsonData))
            console.log(jsonData)
        })
    }, [])

    return (
        <h1>New York, NY</h1>
    );
}

export default NewYork;