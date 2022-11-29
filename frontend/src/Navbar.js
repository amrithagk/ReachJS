import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="NavBar">
      <div>
        <Link to="/" className="page-logo">
          ReachJS
        </Link>
      </div>
      <nav>
        <ul>
          <CustomLink to="/categories">Categories</CustomLink>
          <CustomLink to="/vendors">Vendors</CustomLink>
          <CustomLink to="/map">Map</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/register">Register</CustomLink>
          <CustomLink to="/support">Support</CustomLink>
        </ul>
      </nav>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
