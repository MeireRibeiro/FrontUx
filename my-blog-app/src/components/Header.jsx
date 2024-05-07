import { Link } from "react-router-dom";
import logo from '../logo/logo.png'; 
import '../css/style.css'; 

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </nav>
  );
}

export default Header;