import React, { useEffect, useState } from "react";
import { database } from "./firebase";
import { getAuth, signOut } from "firebase/auth";
import { useHistory, useNavigate } from "react-router-dom"; // Import useHistory for programmatic navigation
import "./fire.css";

const auth = getAuth();

const First_Fire_Store = () => {
  const navigator = useNavigate();

  //   const history = useHistory(); // Get history object for navigation

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("User signed out successfully");
        // Redirect the user to the sign-in page after successful sign-out
        navigator("/");
        // history.push("/signin"); // Redirect to sign-in page, adjust the route according to your application
      })
      .catch((error) => {
        // An error happened.
        console.error("Sign-out error:", error);
        // You can display an error message to the user or handle the error in any other way
      });
  };

  return (
    <>
      <section className="f_store">
        <div className="container">
          <div className="text-center">
            <h1>Hello Sirrrrr,</h1>
            <h1>You have successfully registered..!! </h1>
            <br />
            <br />
            <br />
            <h1>Btw Sirr,</h1>
            <h1>bahot mahenat ki hai,</h1>
            <h1>achhe marks de dena..!! please..!!</h1>
            <button className="btn btn-primary w-25 mt-5 py-2 rounded-4 shadow-lg" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default First_Fire_Store;
