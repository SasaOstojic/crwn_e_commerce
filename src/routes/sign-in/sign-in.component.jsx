import { singInWithGooglePopup, createUserDocumentAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await singInWithGooglePopup();
        const userDocRef = await createUserDocumentAuth(user);
    }
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
        </div>
    )
}

export default SignIn;