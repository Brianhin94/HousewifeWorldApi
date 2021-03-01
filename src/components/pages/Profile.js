import axios from 'axios';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';



const Profile = (props) => {
    const [message, setMessage] = useState('Loading msg...');
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/private`)
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(err => {
                console.log('THERE IS AN ERROR OH NO')
                props.handleAuth(null);
            })
    }, []);
    useEffect(() => {

        axios.get(`${process.env.REACT_APP_SERVER_URL}/user/profile`, {data : { 
            name : first_name  

        }})
            .then(results => {
                console.log(results.data) 
                setFavorite(results) }
            )
        .catch(err =>{console.log(err)})
    }, [])

    if (!props.currentUser) return <Redirect to='/auth' />
    return (
        <div>
            <h1>WELCOME TO YOUR PROFILE PAGE, FUeTURE HOUSEWIFE.</h1>
            <h2>Yes I'm talking to you, Queen!</h2>
            {/* <h4>{message}</h4> */}
            <h2> 👇 YOUR FAVE HOUSEWIVES BELOW: 👇 </h2>
            <data />
            <ul>
                {favorite.map((fave, i) => (
                    <li> {fave.name}
                    </li>
                ))}
            </ul>



            <form method="POST" action='/profile/{housewife.name} ?_method=DELETE'>
                <input type="hidden" name="first_name" value="{housewife.first_name}" />
                <input type="hidden" name="last_name" value="{housewife.last_name}" />
                <input type="hidden" name="img_url" value="{housewife.img_url}" />
                <input id="delete" type="submit" value="REMOVE FROM FAVORITES" />
            </form>
        </div>
    );
}

export default Profile;