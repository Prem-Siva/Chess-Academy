import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer>
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      <div className="footer-container">
        <div className="logo">
          <h1>Beyond Board Academy</h1>
        </div>

        <div className="about-me">
         
        

          <div className="icons">
            <ul>
              <li className="list-group">
                <a href="https://www.facebook.com">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-group">
                <a href="https://www.instagram.com">
                  <FaInstagram />
                </a>
              </li>
              <li className="list-group">
                <a href="https://www.linkedin.com">
                  <FaLinkedin />
                </a>
              </li>
              <li className="list-group">
                <a href="#">
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="links">
           </div>
        <Outlet />
      </div>
      <div className="copyright p-3">© 2024 Copyright Reserved</div>
    </footer>
  );
}

export default Footer;
