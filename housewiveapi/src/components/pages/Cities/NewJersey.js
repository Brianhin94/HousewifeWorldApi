import { useEffect, useState } from 'react'

const NewJersey = (props) => {

    const [jersey, setJersey] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=New Jersey`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
        .then(response => response.json())
        .then(jsonData => {
            setJersey(Object.values(jsonData))
            console.log(jsonData)
        })
    }, [])

    return (
        <h1>New Jersey</h1>
    );
}

export default NewJersey;