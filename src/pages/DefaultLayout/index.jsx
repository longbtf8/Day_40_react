import { NavLink, Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <div>
      <div className="header">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active navLink" : "navLink"
              }
            >
              Post
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};
export default DefaultLayout;
