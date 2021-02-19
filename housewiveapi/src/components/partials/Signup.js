import { useState } from 'react';

const Signup = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //TODO add form password

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`sending up new user data`, {name, email, password})
  }

  return (
    <section>
      <h2>SIGNUP</h2>
      <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="name">Name: </label>
      {/* ToDO: see if need an id for label */}
      <input 
       type ="text"
       name="name"
        placeholder="Display Name"
        onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="form-elem">
      <label htmlFor="email">Email</label>
      <input
      type="email"
      name="email"
      placeholder="lovemtns@mail.com"
onChange={e => setEmail(e.target.value)}
/>
      </div>
      <div className="form-elem">
      <label htmlFor="password">Password</label>
      <input
      type="password"
      name="password"
      placeholder="******"
onChange={e => setPassword(e.target.value)}
/>
      </div>
      <input type="submit" value="signup"/>
      </form>
    </section>
  );
}

export default Signup;