import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const LayoutNav: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default LayoutNav;
