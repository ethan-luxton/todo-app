import React, { useState, useContext } from 'react';
import { If, Then, Else } from 'react-if';
import { LoginContext } from './Context.jsx';

const Login = () => {
  const context = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log('context:', context);

  const handleSubmit = (e) => {
    e.preventDefault();
    context.login(username, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <If condition={context.loggedIn}>
      <Then>
        <button onClick={context.logout}>Log Out</button>
      </Then>
      <Else>
        <form onSubmit={handleSubmit}>
          <input
            name="username"
            onChange={handleChange}
            placeholder="login id"
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="password"
          />
          <button>Login</button>
        </form>
      </Else>
    </If>
  );
};

export default Login;
