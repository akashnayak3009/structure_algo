
import React, { useEffect, useState } from 'react';
import OTPInput from 'otp-input-react';
import '../VerifyOtp/VerifyOtp.css';
import { auth } from './firebase-config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const Verify = () => {


  const [otp, setOtp] = useState();


  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier( auth,
        "recaptcha-container", {
            size: "invisible",
            callback: function(response) {
                console.log("Captcha Resolved");
            },
            defaultCountry: "IN",
        }
    );
}, []);

const loginSubmit = (e) => {
    e.preventDefault();

    let phone_number = e.target.mobile.value;
    const appVerifier = window.recaptchaVerifier;

    
        signInWithPhoneNumber(auth,phone_number, appVerifier)
        .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            console.log("otp sent");
            window.confirmationResult = confirmationResult;
            // ...
        })
        .catch((error) => {
          console.log("SMS Not sent")
        });
};
const otpSubmit = (e) => {
    e.preventDefault();

    let opt_number = e.target.otp_value.value;

    window.confirmationResult
        .confirm(opt_number)
        .then((confirmationResult) => {
            console.log(confirmationResult);
            console.log("success");
            // window.open("/", "_self");
        })
        .catch((error) => {
           console.log("couldn't sign in");
        });
};
const [user, setUser] = useState([]);

auth.onAuthStateChanged((user) => {
    if (user) {
        setUser(user);
    }
});

  return (
    <div className="verify-otp-container">
        <div>
       <h2>Login Form</h2>
         <form id="loginForm" onSubmit={loginSubmit}>
           <div id="sign-in-button"></div>
           <input type="text" name="mobile" placeholder="Mobile number" required/>
           <button type="submit">Submit</button>
         </form>
         <div id="recaptcha-container"></div>
      </div>
      <h2>Verify OTP</h2>
      <div className="form-wrapper" onSubmit={otpSubmit}>
          <form id="otpForm">
            <div className="input-field">
              <label>Enter OTP</label>
              <input
                type="number"
                placeholder="One time password"
                name="otp_value"
                autoComplete="false"
              />
            </div>
            <button className="main-button" type="submit">
              Verify OTP
            </button>
          </form>
        </div>
    </div>
  );
};

export default Verify;
