// stylesheet
import "./NewsMenu.css";

// NavLink
import { NavLink } from "react-router-dom";

const NewsMenu = ({children}) => {
  const menuItem = [
    {
      path: "/all-categories",
      name: "All Categories",
    },
    {
      path: "/tech",
      name: "Tech",
    },
    {
      path: "/finance",
      name: "Finance",
    },
    {
      path: "/top-headlines",
      name: "Top headlines",
    },
  ];
  return (
    <>
      <div className="class_menu">
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active_link"
          >
            <p>{item.name}</p>
          </NavLink>
        ))}
      </div>
      <main>
        {children}
      </main>
    </>
  );
};

export default NewsMenu;
