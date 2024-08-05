import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={APP_LOGO}
          alt="Food Delivery Logo"
        />
      </div>
      <div className="nav-items">
        <li>About</li>
        <li>Add Restaurant</li>
        <li>Contact Us</li>
        <li><Link to={"login"}>Log In</Link></li>
        <li>Sign Up</li>
      </div>
    </div>
  );
};

export default Header;