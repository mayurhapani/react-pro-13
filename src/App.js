// App.js (main component)
import React from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import GoogleSignIn from "./component/Google_SignIn"; // Assuming you have a separate component for sign-in
import SignUp from "./component/SignUp"; // Separate component for sign-up
import First_Fire_Store from "./pages/FireStore/First_Fire_Store";

const App = () => {
  return (
    <Router>
      {/* <Switch> */}
      <Routes>
        <Route path="/" element={<GoogleSignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/First_Fire_Store" element={<First_Fire_Store />} />
        {/* Add a default route in case none of the above match */}
        {/* <Route component={<GoogleSignIn />} /> */}
      </Routes>
      {/* </Switch> */}
    </Router>
  );
};

export default App;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import First_Fire_Store from "./pages/FireStore/First_Fire_Store";
// // import Google_Login from "./pages/FireStore/Google_Login";
// import Google_SignUp from "./pages/FireStore/Google_SignUp";

// const App = () => {
//   return (
//     <>
//       {/* <First_Fire_Store /> */}
//       {/* <Google_Login /> */}
//       <Google_SignUp />
//     </>
//   );
// };

// export default App;
