import React, {useState, useEffect, useCallback} from 'react';
import jwt_decode from 'jwt-decode';

import axios from 'axios';

export const LoginContext = React.createContext();

const LoginProvider = (props) => {
  const login = async ( username, password ) => {

    let url = process.env.REACT_APP_API;

    const axiosRequest = {
      url: `${url}/signin`,
      method: 'post',
      auth: {
        username, password
      }
    }
    let response = await axios(axiosRequest)
    const {token} = response.data;

    if(token) {
       try {
         validateToken(token);
       } catch(e) {
         setLoginState( false, null, {}, e.message );
       }
    } else {
       setLoginState( false, null, {}, { message: "Invalid User"} );
    }

  }

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