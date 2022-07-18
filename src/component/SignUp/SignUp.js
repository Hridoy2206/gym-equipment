import React from 'react';
import { useCreateUserWithEmailAndPassword,useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import Loading from '../../Shared/Loading';
import image from "../../image/google.png"
import EmailVerification from '../../Shared/EmailVerification';

const SignUp = () => {
  
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    // const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
    let errorMessage;

    const handleSignUp = event =>{
        event.preventDefault()
        
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    
    const handleGoogleSignIN = () =>{
        signInWithGoogle()
      }

      //Email verification
      // if (user?.emailVerified) {
      //   return <EmailVerification></EmailVerification>
      // }


      if (user || googleUser) {
        navigate(from, { replace: true });
      }
      if (loading || googleLoading) {
          return <Loading></Loading>
      }

      if (error || googleError) {
        errorMessage = (
          <div>
          <p>{error?.message}</p>
        </div>
        )
      }
    return (
    <div className="form-container">
      <div>
        <h2 className="text-center login-title border-bottom pb-2 mb-2">Login</h2>
        <form className="login-form" onSubmit={handleSignUp}>
            <div>
                <label className="form-label" htmlFor="name">Name</label>
                <input type="text" name="name" id="" required/>
            </div>
            <div>
                <label className="form-label" htmlFor="email">Email</label>
                <input type="email" name="email" id="" required/>
            </div>
            <div>
                <label className="form-label" htmlFor="password">Password</label>
                <input type="password" name="password" id=""  required/>
            </div>
            <button className="login-btn">Login</button>
            <p className='text-danger'>{errorMessage}</p>

            <div >
                <span className=" manage-register mt-2 d-block">You don't have an account? <Link className=" sign-up-btn btn tbn-link mb-1" to="/login">Login</Link></span>
            </div>
            <div className="mt-2 ">
              <button onClick={handleGoogleSignIN} className="google-btn"><img src={image} height={18} alt="" /> Google signIn</button>
            </div>
        </form>
      </div>
    </div>
    );
};

export default SignUp;