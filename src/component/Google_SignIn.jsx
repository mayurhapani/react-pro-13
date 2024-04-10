import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import First_Fire_Store from "../pages/FireStore/First_Fire_Store";
import "../pages/FireStore/fire.css";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const Google_SignIn = () => {
  const navigator = useNavigate();

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const signInWithEmailPassword = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        alert("login successful");
        const user = userCredential.user;
        console.log("User signed in:", user);
        // You can redirect the user or perform any other actions upon successful sign-in
        navigator("/First_Fire_Store");
      })
      .catch((error) => {
        alert("wrong user credentials");
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign-in error:", errorMessage);
        // Display an error message to the user or handle the error in any other way
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="Sign_Up">
      <div className="container">
        <div className="signup_box">
          <div className="create-account ">Sign In</div>

          <div className="password">
            <input type="email" id="email" placeholder="Enter Email ID" onChange={(e) => setEmail(e.target.value)} value={email} required />
          </div>

          <div className="password">
            <input
              type="password"
              id="password"
              placeholder="Enter Password of minimum 6 digit"
              className="d-inline-block"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          {/* Your sign-in component JSX */}
          <button className="go_btn" onClick={signInWithEmailPassword}>
            Sign In
          </button>
          <button className="go_btn" onClick={googleSignIn}>
            Sign in with Google
          </button>

          <Link to="/signup">If Alredy have an Account? Sign in</Link>
        </div>
      </div>
    </section>
  );
};

export default Google_SignIn;
