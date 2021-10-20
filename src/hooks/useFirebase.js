import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true); //user using the login functionality

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    setIsLoading(true); // user trying to log with google

    return signInWithPopup(auth, googleProvider);
  };

  // change the user state after successfull login
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false); // as the user state changed so we are not in loading state
    });

    return () => unsubscribed;
  }, [auth]);

  const logout = () => {
    setIsLoading(true); // user is trying to log out.
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false)); // user is now logged out
  };

  return {
    logout,
    user,
    isLoading,
    setIsLoading,
    error,
    setError,
    signInUsingGoogle,
  };
};

export default useFirebase;
