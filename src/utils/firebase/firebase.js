import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, Firestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwRIOLRI0BcdDURRwtSF6QejSipCp3wCo",
  authDomain: "zalando-c3fa9.firebaseapp.com",
  projectId: "zalando-c3fa9",
  storageBucket: "zalando-c3fa9.appspot.com",
  messagingSenderId: "340553294460",
  appId: "1:340553294460:web:ec7612aedeadf7df841ff9"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUseDocumentFormAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      // error here
    }
  }
  return userDocRef
}
