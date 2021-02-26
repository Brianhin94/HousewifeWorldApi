import { Route, Redirect } from 'react-router-dom';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Housewifemuseum from './pages/HousewifeMuseum';
import Developers from './pages/Developers';
// Cities
import Potomac from './pages/Cities/Potomac';
import OrangeCounty from './pages/Cities/OrangeCounty';
import Atlanta from './pages/Cities/Atlanta';
import NewYork from './pages/Cities/NewYork';
import NewJersey from './pages/Cities/NewJersey';
import SaltlakeCity from './pages/Cities/SaltlakeCIty';
import BeverlyHills from './pages/Cities/BeverlyHills';
import Dallas from './pages/Cities/Dallas';

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
            
            <Route exact path ='/Housewifemuseum' render={(renderProps) => (
                <Housewifemuseum handleAuth={props.handleAuth} {...renderProps} />
            )}/>
            <Route path='/auth' render={(renderprops) => (
                <Auth handleAuth={props.handleAuth} {...renderprops} />
            )}/>
            <Route path='/Cities/Potomac' component={Potomac} />
            <Route path='/Cities/OrangeCounty' component={OrangeCounty} />
            <Route path='/Cities/Atlanta' component={Atlanta} />
            <Route path='/Cities/NewYork' component={NewYork} />
            <Route path='/Cities/NewJersey' component={NewJersey} />
            <Route path='/Cities/SaltlakeCity' component={SaltlakeCity} />
            <Route path='/Cities/BeverlyHills' component={BeverlyHills} />
            <Route path='/Cities/Dallas' component={Dallas} />
            <Route path='/developers' component={Developers} />
            <PrivateRoute path='/profile' component={Profile} currentUser={props.currentUser} handleAuth={props.handleAuth} />
        </main>
    );
}

export default Content;