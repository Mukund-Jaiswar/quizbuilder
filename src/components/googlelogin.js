import {auth, Provider} from "../firebase"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const GoogleIn = () => {

    let navigate = useNavigate();
    const {dispatch} = useContext(AuthContext)

    const SignInWithGoogle = (e) => {
        e.preventDefault();
        signInWithPopup(auth, Provider).then((result) => {
            const user = result.user
            dispatch({type:"LOGIN", payload: user})
            navigate("/")
        })
    }

    return (
        <div className="google-login">
            <div className="google-login-container">
                <p>Sign In with Google to continue</p>
                <div className="google-btn" onClick={SignInWithGoogle}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt=""/>
                    </div>
                    <p className="btn-text"><b>Sign in with google</b></p>
                </div>
            </div>
        </div>
    )
}

export default GoogleIn;