import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import { Element } from "react-scroll"; // Import Element from react-scroll

/* Components */
import Aboutme from "./components/Aboutme";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Contacts from "./components/Contacts";
import Demo from "./components/Demo";
import Gallery from "./components/Gallery";
import Feedback from "./components/Feedback";
import User from "./pages/User";
import Footer from "./components/Footer";
import AuthProvider from "./provider/AuthProvider";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./components/Cart";
import { MyContextProvider } from "./context/Context.jsx";
import Ourteam from "./components/Ourteam";
import Log from "./components/Admin.jsx";
import UserDashboard from "./components/UP.jsx";
import App1 from "./components/Admin1/App1.jsx";
import Udash from "./components/Udash.jsx";
import Bookingform from "./components/form.jsx";
function App() {
  return (
    <div className="app">
      <MyContextProvider>
        <BrowserRouter>
          <AuthProvider>
            <Navbar />
            <Routes>
              {/* Use Element to wrap the Home component */}
              <Route
                path="/"
                element={
                  <Element name="home-section">
                    <Home />
                  </Element>
                }
              />
              <Route path="/aboutme" element={<Aboutme />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/demo" element={<Demo />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/login" element={<Login />} />
              <Route path="/user" element={<User />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/admin" element={<Log />}/>
              <Route path = "/adm" element={<App1 />}/>
              <Route path="/Udash" element={<Udash />}/>
              <Route path="/for" element={<Bookingform />}/>


            </Routes>
            <Footer />
          </AuthProvider>
        </BrowserRouter>
      </MyContextProvider>
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
    
    </>
  );
}

export default App;