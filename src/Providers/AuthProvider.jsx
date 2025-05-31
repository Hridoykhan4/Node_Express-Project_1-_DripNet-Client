import {  useState } from "react";
import AuthContext from "../Context/AuthContext";
import {
  createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
//   onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

/*   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loadedUser) => {
      if (loadedUser) {
        setUser(loadedUser);
        setLoading(false)
      }
    });
    return () => {
      unsubscribe();
    };
  }, []); */

  const userInfo = {
    user,
    createNewUser,
    loading,
    setLoading,
    setUser,
    updateUserProfile,
    signInUser
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
