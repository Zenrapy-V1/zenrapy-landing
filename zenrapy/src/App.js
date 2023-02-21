import logo from "./logo.svg";
import "./App.scss";
import Landing from "./pages/LandingPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/ContactUs";
import JoinUs from "./pages/JoinUs/JoinUs";
import TherapistRegistration from "./pages/JoinUs/TherapistRegistration/TherapistRegistration";
import SignIn from "./pages/JoinUs/Login/Signin";
import Signup from "./pages/JoinUs/Signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route
            path="/therapist-registration"
            element={<TherapistRegistration />}
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
