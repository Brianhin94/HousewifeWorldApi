import Login from '../partials/Login';
import Signup from '../partials/Signup';
import ReactPlayer from 'react-player';

const Auth = (props) => {
    return (
        <div className="auth-container">
            <div className="auth-header">
                <h1 className="authWelcome">WELCOME TO THE REAL MUSEUM OF REAL HOUSEWIVES</h1>
                <div className="authVid">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=CtbdMklFpaA&t=43s"
                        />
                    </div>
            </div>

            <div className="auth-panel">
                <Signup handleAuth={props.handleAuth} />
                <Login handleAuth={props.handleAuth} />
            </div>
        </div>
    );
}

export default Auth;