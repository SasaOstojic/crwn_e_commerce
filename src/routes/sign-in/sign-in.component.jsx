import { singInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up-form.component";

const SignIn = () => {
   
    const logGoogleUser = async () => {
        const {user} = await singInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn;