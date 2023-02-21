import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Pages/Dashboard";
import FanLogin from "./Pages/FanLogin";
import CelebLogin from "./Pages/CelebLogin";
import Navbar from "./Components/Navbar";
import CelebSignup from "./Pages/CelebSignup";
import Signup from "./Pages/FanSignup";
import Schedule from "./Pages/Schedule";
import SignupUserMode from "./Pages/SignupUserMode";
import LoginUserMode from "./Pages/LoginUserMode";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";
import FanEditProfile from "./Pages/FanEditProfile";
import Categories from "./Pages/Categories";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer.js";
import Booking from "./Pages/Booking";
import TVcategories from "./Pages/TVcategories";
import Filmcategories from "./Pages/Filmcategories";
import Bloggerscategories from "./Pages/Bloggerscategories";
import YTcategories from "./Pages/YTcategories";
import ProfileViewAs from "./Pages/ProfileViewAs";
import { createContext, useReducer, useState } from "react";
import { initialState, reducer } from "./reducer/UseReducer"

import EmailVerify from "./Components/EmailVerify";
import ForgotPassword from "./Components/ForgotPassword";
import PasswordReset from "./Components/PasswordReset";
import StripeContainer from "./Components/StripeContainer";
import FanProfile from './Pages/FanProfile';
import ForgotPasswordCeleb from './Components/ForgotPasswordCeleb/index';
import CelebSignupcopy from "./Pages/CelebSignupcopy";

import EmailVerifyCeleb from './Components/EmailVerifyCeleb/index';
import PasswordResetCeleb from './Components/PasswordResetCeleb';

import Meet from './Components/Meeting/Meet';
export const UserContext = createContext();
// const Login = React.lazy(() => import('./views/pages/login/Login'))
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [currentId, setCurrentId] = useState(null)
  const [currentUser, setCurrentUser] = useState("")
  const [fanProps, setFanProps] = useState(null)

  return (

    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={{ state, dispatch }}>
          <Navbar currentUser={currentUser} />
          {/* <Navbar/> */}

          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/celeb-signup-copy" element={<CelebSignupcopy />} />
            <Route path="/payment" element={<StripeContainer />} />
            <Route path="/fan-schedule" element={<Schedule msg="join meeting" />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about-us" element={<AboutUs />} />

            <Route path="/login-usermode" element={<LoginUserMode />} />
            <Route path="/signup-usermode" element={<SignupUserMode />} />

            <Route path="/celeb-login" element={<CelebLogin setCurrentUser={setCurrentUser} />} />
            <Route path="/fan-login" element={<FanLogin setCurrentUser={setCurrentUser} setFanProps={setFanProps} />} />
            <Route path="/celeb-signup" element={<CelebSignup />} />
            <Route path="/fanSignup" element={<Signup />} />


            <Route path="/profile/:slug" element={<Profile setCurrentId={setCurrentId} />} />

            <Route path="/FanProfile/:slug" element={<FanProfile setCurrentId={setCurrentId} />} />
            <Route path="/FanProfile/edit-profile/:slug" element={<FanEditProfile currentId={currentId} setCurrentId={setCurrentId} />} />

            <Route path="/profile/view-as/:slug" element={<ProfileViewAs currentId={currentId} setCurrentId={setCurrentId} />} />
            <Route path="/profile/edit-profile/:slug" element={<EditProfile currentId={currentId} setCurrentId={setCurrentId} />} />
            <Route path="/profile/:slug/add-session" element={<Booking />} />

            <Route path="/tvcategories" element={<TVcategories />} />
            <Route path="/filmcategories" element={<Filmcategories />} />

            <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
            <Route
              path="/celebs/:id/verify/:token"
              element={<EmailVerifyCeleb />}
            />

            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/celeb-forgot-password"
              element={<ForgotPasswordCeleb />}
            />
            <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
            <Route
              path="/celeb-password-reset/:id/:token"
              element={<PasswordResetCeleb />}
            />

            <Route path="/forgot-passwordCeleb" element={<ForgotPasswordCeleb />} />
            <Route
              path="/bloggerscategories"
              element={<Bloggerscategories />}
            />
            <Route path="/ytcategories" element={<YTcategories />} />

            <Route path="/Meet" element={<Meet />} />
          </Routes>
          <Footer />
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
