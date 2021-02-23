import { Link } from 'react-router-dom';

const Header = (props) => {
  let style = {
    backgroundColor: 'chartreuse',
    borderBottom: '3px solid black',
    margin: 0,
    padding: '1em 0'
  }

  let conditionalLinks = props.currentUser ?
    <nav>
      <Link className="nav-link" to='/'>Home</Link>{'  |  '}
      <Link className="nav-link" to='/profile'>Account</Link>{'  |  '}
      <Link className="nav-link" to='/Housewifemuseum'>Housewife Museum</Link>{' | '}
      <Link className="nav-link" to='/developers'>Meet the Developers</Link>{' | '}
      <span className="nav-link" onClick={e => props.handleAuth(null)}>Logout</span>
      {/* TODO Logout link stylilng & Functionality */}
    </nav> :
    <nav>
      <Link className="nav-link" to='/'>Home</Link>{'  |  '}
      <Link className="nav-link" to='/auth'>Login or Signup</Link>
    </nav>

  return (
    <header style={style}>
      <h1>Housewife Museum</h1>
      {conditionalLinks}
    </header>
  );
}

export default Header;
