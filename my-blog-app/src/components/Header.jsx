import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">My Blog</Link>
      </div>
    </nav>
  );
}

export default Header;