import { useEffect, useState } from 'react'


const Atlanta = (props) => {

    const [atlanta, setAtlanta] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Atlanta`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
        .then(response => response.json())
        .then(jsonData => {
            setAtlanta(Object.values(jsonData))
            console.log(jsonData)
        })
    }, [])

    return (
        <h1>Atlanta, GA</h1>
    );
}

export default Atlanta;