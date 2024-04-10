import React, { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import First_Fire_Store from "./First_Fire_Store";
import "./fire.css";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const Google_SignUp = () => {
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

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const SignUp = () => {
    if (first_name === "") {
      alert("Please enter your first name");
    } else if (last_name === "") {
      alert("Please enter your last name");
    } else if (password !== confirm_password) {
      alert("Passwords do not match");
    } else {
      alert("Successfully Signed Up");
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log("hiii");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <First_Fire_Store />
      ) : (
        <>
          <section className="Sign_Up">
            <div className="container">
              <div className="signup_box">
                <div className="create-account ">Create An Account</div>

                <div className="name">
                  <input
                    type="text"
                    id="first-name"
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={first_name}
                    required
                  />
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={last_name}
                    required
                  />
                </div>
                <div className="email_verify">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email ID"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
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
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="Enter Confirm Password"
                    className="d-inline-block"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirm_password}
                    required
                  />
                </div>

                <div className="content-footer mt-4">
                  <button className="go_btn" onClick={SignUp}>
                    Sign Up
                  </button>
                  <button className="go_btn" onClick={googleSignIn}>
                    Sign in with Google
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Google_SignUp;
