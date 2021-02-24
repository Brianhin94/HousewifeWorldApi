import { useEffect, useState } from 'react'

const BeverlyHills = (props) => {

    const [beverly, setBeverly] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Beverly Hills`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
        .then(response => response.json())
        .then(jsonData => {
            setBeverly(Object.values(jsonData))
            console.log(jsonData)
        })
    }, [])

    return (
        <h1>Beverly Hills, CA</h1>
    );
}

export default BeverlyHills;