import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db, storage } from "../constants/firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage'
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";


export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)


export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
    }
    catch (e) {
      toast.error("Incorrect email or password")
    }
  }


  const register = async (displayName, email, password, file) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed',
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL
            }).then(() => {
              console.log("Profile updated!")
            }).catch((error) => {
              toast.error("An error occurred");
            })

            //Created empty user chats in firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            })

            await setDoc(doc(db, "userChats", res.user.uid), {})

          });
        }
      );


    }
    catch (e) {
      toast.error(e.message)
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};