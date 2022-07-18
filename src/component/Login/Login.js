import React from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState, useSendEmailVerification, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import "./Login.css"
import auth from "../../Firebase/Firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading";
import image from "../../image/google.png"

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  // const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
  let errorMessage;

      if (loading || googleLoading) {
        return <Loading></Loading>
      }

    const handleLogin = event =>{
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
         
    }
    
    const handleGoogleSignIN = () =>{
      signInWithGoogle()
    }
    if (user || googleUser) {
        navigate(from, { replace: true });
    }

    if (error || googleError) {
      errorMessage = (
        <div>
        <p>{error?.message}</p>
      </div>
      )
    }
    console.log(user);
  return (
    <div className="form-container ">
      <div className="mb-5 pb-5 form-section">
        <h2 className="text-center login-title border-bottom pb-2 mb-2">Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
            <div>
                <label className="form-label" htmlFor="email">Email</label>
                <input type="email" name="email" id="" required/>
            </div>
            <div>
                <label className="form-label" htmlFor="password">Password</label>
                <input type="password" name="password" id="" required/>
            </div>
            <button className="login-btn">Login</button>
            <p className="text-danger">{errorMessage}</p>

            <div >
                <span className=" manage-register mt-2 d-block">You don't have an account? <Link className=" sign-up-btn btn tbn-link mb-1" to="/signup">Sign Up</Link></span>
            </div>
            <div className="mt-2 m-3">
              <button onClick={handleGoogleSignIN} className="google-btn"><img src={image} height={18} alt="" />Sign in with google</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
