import React, {useState, useEffect, useCallback} from 'react';
import jwt_decode from 'jwt-decode';


const testUsers = {
  Administrator: {
    password: 'admin',
    name: 'Administrator',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW5pc3RyYXRvciIsInJvbGUiOiJhZG1pbiIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJywncmVhZCcsJ3VwZGF0ZScsJ2RlbGV0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.pAZXAlTmC8fPELk2xHEaP1mUhR8egg9TH5rCyqZhZkQ'
  },
  Editor: {
    password: 'editor',
    name: 'Editor',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRWRpdG9yIiwicm9sZSI6ImVkaXRvciIsImNhcGFiaWxpdGllcyI6IlsncmVhZCcsICdjcmVhdGUnLCd1cGRhdGUnXSIsImlhdCI6MTUxNjIzOTAyMn0.Mvl28zirdz1i7R27Sc9z27aWo3jNCaqaUNxU9mNNiTM'
  },
  Writer: {
    password: 'writer',
    name: 'Writer',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiV3JpdGVyIiwicm9sZSI6IndyaXRlciIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.dmKh8m18mgQCCJp2xoh73HSOWprdwID32hZsXogLZ68'
  },
  User: {
    password: 'user',
    name: 'User',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsInJvbGUiOiJ1c2VyIiwiY2FwYWJpbGl0aWVzIjoiWydyZWFkJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.WXYvIKLdPz_Mm0XDYSOJo298ftuBqqjTzbRvCpxa9Go'
  },
};

export const LoginContext = React.createContext();

const LoginProvider = (props) => {
  const login = (username, password) => {
    let validUser = testUsers[username];

    if (validUser && validUser.password === password) {
      try {
        validateToken(validUser.token);
      } catch (e) {
        setLoginState(false, null, {}, e.message);
      }
    } else {
      setLoginState(false, null, {}, { message: 'Invalid User' });
    }
  };

  const validateToken = useCallback((token) => {
    try {
      let validUser = jwt_decode(token);
      setLoginState(true, token, validUser);
    } catch (e) {
      setLoginState(false, null, {}, e.message);
    }
  }, []);

  const setLoginState = (loggedIn, token, user, error) => {
    setState({ loggedIn, token, user, error });
    localStorage.setItem('auth', token);
  };

  const logout = () => {
    setLoginState(false, null, {});
  };

  const can = (capability) => {
    return state?.user?.capabilities?.includes(capability);
  };

  useEffect(() => {
    const token = localStorage.getItem('auth');
    validateToken(token);
  }, [validateToken]);

  const [state, setState] = useState({
    loggedIn: false,
    token: null,
    user: { capabilities: [] },
  });
  
  const value = {
    ...state,
    login: login,
    logout: logout,
    can: can,
  };

  return (
    <LoginContext.Provider value={value}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;