import Login from '../partials/Login';
import Signup from '../partials/Signup';

const Auth = (props) => {
    return (
        <div className="auth-container">
            <div className="auth-header">
                <h1>WELCOME TO THE REAL MUSEUM OF REAL HOUSEWIVES</h1>
            </div>

            <div className="auth-panel">
                <Signup handleAuth={props.handleAuth} />
                <Login handleAuth={props.handleAuth} />
            </div>
        </div>
    );
}

export default Auth;