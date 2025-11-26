import { NavLink, Outlet } from "react-router";

const DefaultLayout = () => {
  <>
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              {
                isActive ? "color : blue" : "";
              }
            }}
          >
            Post
          </NavLink>
        </li>
      </ul>
    </div>
    <Outlet />;
  </>;
};
export default DefaultLayout;
