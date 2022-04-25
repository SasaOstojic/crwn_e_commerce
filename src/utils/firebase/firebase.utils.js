import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc} from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDqIWf9aeTGBEXuL-s-IseBk912mXoNQ80",
  
    authDomain: "crwn-clothing-database-6601f.firebaseapp.com",
  
    projectId: "crwn-clothing-database-6601f",
  
    storageBucket: "crwn-clothing-database-6601f.appspot.com",
  
    messagingSenderId: "495646273838",
  
    appId: "1:495646273838:web:bc8f2b3aaec8a55b24cabf"
  
  };
  
  
  // Initialize Firebase
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      promt: 'select_account'
  });

  export const auth = getAuth();
  export const singInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);

    if(!userSnapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch (error) {

        }
    }

    return userDocRef;
  }