import { Link } from 'react-router-dom';
import image from '../images/bravo.jpg';

const Header = (props) => {
  let style = {
    backgroundColor: '#393F49',
    color: 'white',
    borderBottom: '3px solid black',
    margin: 0,
    padding: '1em 0'
  }

  let conditionalLinks = props.currentUser ?
    <nav>
      <div className="nav-primary">
        <Link className="nav-link" to='/'>
          <img src={image} className="home-img" />
        </Link>{'  |  '}
        <Link className="nav-link" to='/profile'>Account</Link>{'  |  '}
        <Link className="nav-link" to='/Housewifemuseum'>Housewife Museum</Link>{' | '}
        <Link className="nav-link" to='/developers'>Meet the Developers</Link>{' | '}
        <span className="nav-link" onClick={e => props.handleAuth(null)}>Logout</span>
      </div>
      {/* TODO Logout link stylilng & Functionality */}
    </nav> :
    <nav className="nav-preauth">
      <Link className="nav-link" to='/'><img src={image} className="home-img" /></Link>{'  |  '}
      <button placeholder="Sign Up/Log In">
        <Link className="nav-link" to='/auth'>Login or Signup</Link>
      </button>
    </nav>

  return (
    <header style={style}>
      <h1>Housewife Museum</h1>
      {conditionalLinks}
    </header>
  );
}

export default Header;
