import React from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";

const EmailVerification = () => {
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
  return (
    <div className="text-center mx-auto m-5" style={{paddingBottom: "300px"}}>
      <h2>Please Verified your Email</h2>
      <button
        className="btn btn-success"
        onClick={async () => {
          await sendEmailVerification();
          alert("Sent email");
        }}
      >
        Resend verify email
      </button>
    </div>
  );
};

export default EmailVerification;
