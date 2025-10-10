import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { signInWithGooglePopup } from "../utils/googleSignIn";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [firebaseToken, setFirebaseToken] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const token = await currentUser.getIdToken();
        console.log("Firebase JWT:", token); // remove in prod
        setFirebaseToken(token);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    let isMounted = true;

    const refreshToken = async () => {
      if (user && isMounted) {
        const token = await user.getIdToken(true); // force refresh
        setFirebaseToken(token);
      }
    };

    const interval = setInterval(refreshToken, 50 * 60 * 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [user]);

  const signInWithGoogle = async () => {
    try {
      const { user: loggedInUser } = await signInWithGooglePopup();
      setUser(loggedInUser);
      const token = await loggedInUser.getIdToken();
      setFirebaseToken(token);
    } catch (error) {
      console.error("Google sign-in failed:", error);
      Swal.fire("Failed to sign in with Google");
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setFirebaseToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, firebaseToken, signInWithGoogle, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

