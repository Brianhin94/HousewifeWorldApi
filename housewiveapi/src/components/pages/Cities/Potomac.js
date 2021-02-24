import { useEffect, useState } from 'react'

const Potomac = (props) => {

    const [potomac, setPotomac] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Potomac`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
        .then(response => response.json())
        .then(jsonData => {
            setPotomac(Object.values(jsonData))
            console.log(jsonData)
        })
    }, [])

    return (
        <h1>Potomac</h1>
    );
}

export default Potomac;