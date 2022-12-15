import React from "react";
import "./Navbar.css";
import { Route, Link, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { IRoute } from "../../../../Helpers/interfaces";
import Home from "../../../Pages/Home/Home";
import { ContactMail, HomeMaxSharp, Info } from "@mui/icons-material";
import About from "../../../Pages/About/About";
import Contact from "../../../Pages/Contact/Contact";
export default function Navbar() {
  const routes: Array<IRoute> = [
    {
      path: "/",
      element: <Home />,
      linkText: "Home‌",
      visibility: true,
      icon: <HomeMaxSharp />,
    },
    {
      path: "/contact",
      element: <Contact />,
      linkText: "Contact",
      visibility: true,
      icon: <ContactMail />,
    },

    {
      path: "/about",
      element: <About />,
      linkText: "About",
      visibility: true,
      icon: <Info />,
    },
  ];

  return (
    <Router>
      <nav className="navbar">
        <ul>
          {routes
            .filter((route: IRoute) => route.visibility)
            .map((route: IRoute) => {
              const { path, linkText } = route;
              return (
                <li key={path}>
                  <Link to={path}>{linkText}</Link>
                </li>
              );
            })}
        </ul>
      </nav>

      <Routes>
        {routes.map((route: IRoute) => {
          const { path, element, linkText } = route;
          return <Route  path={path} element={element} key={linkText} />;
        })}
      </Routes>
    </Router>
  );
}
