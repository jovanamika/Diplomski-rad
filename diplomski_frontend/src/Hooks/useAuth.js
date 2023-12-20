import {useContext} from 'react';
import AuthContext from '../Contex/AuthProvider';

import { useState } from 'react';

const useAuth = () => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem('auth');
    return storedAuth ? JSON.parse(storedAuth) : null;
  });

  const saveAuth = (data) => {
    setAuth(data);
    localStorage.setItem('auth', JSON.stringify(data));
  };

  const clearAuth = () => {
    setAuth(null);
    localStorage.removeItem('auth');
  };

  return { auth, setAuth: saveAuth, clearAuth };
};

export default useAuth;

