import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signInWithGooglePopup } from "../utils/googleSignIn";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) navigate("/");
      else navigate("/login");
    });

    return () => unsubscribe();
  }, [navigate]);

  // call from the utils
  const signInWithGoogle = async () => {
    try {
      const { user: loggedInUser } = await signInWithGooglePopup();
      setUser(loggedInUser);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google sign-in failed:", error);
      Swal.fire("Failed to sign in with Google");
    }
  };

  const logout = async () => {
    await auth.signOut();
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
