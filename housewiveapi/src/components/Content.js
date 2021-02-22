import { Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Housewifemuseum from './pages/HousewifeMuseum';
import Developers from './pages/Developers';
import HousewifeCity from './pages/HousewifeCity';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('jwtToken');
    return <Route {...rest} render={(renderProps) => (
        token ?
        <Component {...rest} {...renderProps} /> :
        <Redirect to='/auth' />
    )} />
}

const Content = (props) => {
    return (
        <main>
            <Route exact path='/' component={Home} />
            <Route path='/auth' render={(renderprops) => (
                <Auth handleAuth={props.handleAuth} {...renderprops} />
            )} />
            <Route path ='/Housewifemuseum' component={Housewifemuseum} />
            <Route path='Housewifecity' component={HousewifeCity} />
            <Route path='/developers' component={Developers} />
            <PrivateRoute path='/profile' component={Profile} currentUser={props.currentUser} handleAuth={props.handleAuth} />
            {/* <Route path='/profile' render={(renderProps) => (
                <Profile currentUser={props.currentUser} handleAuth={props.handleAuth} {...renderProps} />
            )} /> */}
        </main>
    );
}

export default Content;