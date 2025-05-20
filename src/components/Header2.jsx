import { NavLink } from "react-router-dom";
import { Heart, Repeat2, ShoppingCart } from "lucide-react";
import {
  leftwrapper,
  logoimg,
  middlewrapper,
  propharmimg,
  rightwrapper,
  wrapper,
} from "../styles/Header2";

const Header2 = () => {
  return (
    <div className="d-none d-sm-flex">
      <div className="header-2-wrapper" style={wrapper}>
        {/* LEFT WRAPPER */}
        <div className="leftwrapper" style={leftwrapper}>
          <img
            src="./logo-Vector.svg"
            alt="logo.png"
            className="img-fluid me-4 d-none d-md-block"
            style={logoimg}
          />
          <img
            src="./pro.svg"
            alt="propharm.png"
            className="img-fluid d-none d-lg-block"
            style={propharmimg}
          />
        </div>

        {/* MIDDLE WRAPPER */}
        <div
          className="h2-middlewrapper d-none d-sm-flex"
          style={middlewrapper}
        >
          <NavLink
            to="/"
            style={({ isActive }) => ({
              borderTop: isActive ? "2px solid rgba(21, 169, 227, 1) " : "none",
              color: isActive ? "#15A9E3" : "#184363",
              height: "96px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            })}
            className="pt-sans-bold-custom"
          >
            Home
          </NavLink>
          <NavLink
            to="/brand-shop"
            className="text-center pt-sans-bold-custom"
            style={({ isActive }) => ({
              borderTop: isActive ? "2px solid rgba(21, 169, 227, 1)" : "none",
              color: isActive ? "#15A9E3" : "#184363",
              height: "96px",
              textDecoration: "none",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            })}
          >
            Shop by Brand
            {/* Button at the top */}
            <button
              className="btn text-light fw-bold  w-50 p-1 rounded-pill text-center newbutton"
              style={{
                position: "absolute",
                maxWidth: "4rem",
                top: "0.01rem",
                backgroundColor: "#39CB74",
              }}
            >
              New
            </button>
          </NavLink>
          <NavLink
            to="/category-shop"
            style={({ isActive }) => ({
              borderTop: isActive ? "2px solid rgba(21, 169, 227, 1)" : "none",
              color: isActive ? "#15A9E3" : "#184363",
              height: "96px",
              textDecoration: "none",

              display: "flex",
              alignItems: "center",
            })}
            className="pt-sans-bold-custom"
          >
            Shop by Category
          </NavLink>
          <NavLink
            to="/Blog-post"
            style={({ isActive }) => ({
              borderTop: isActive ? "2px solid rgba(21, 169, 227, 1)" : "none",
              color: isActive ? "#15A9E3" : "#184363",
              height: "96px",
              textDecoration: "none",

              display: "flex",
              alignItems: "center",
            })}
            className="pt-sans-bold-custom"
          >
            Blog
          </NavLink>
          <NavLink
            to="/shop-lists"
            style={({ isActive }) => ({
              borderTop: isActive ? "2px solid rgba(21, 169, 227, 1)" : "none",
              color: isActive ? "#15A9E3" : "#184363",
              height: "96px",
              textDecoration: "none",

              display: "flex",
              alignItems: "center",
            })}
            className="pt-sans-bold-custom"
          >
            Shop
          </NavLink>
          <NavLink
            to="/elements-list"
            style={({ isActive }) => ({
              borderTop: isActive ? "2px solid rgba(21, 169, 227, 1)" : "none",
              color: isActive ? "#15A9E3" : "#184363",
              height: "96px",
              textDecoration: "none",

              display: "flex",
              alignItems: "center",
            })}
            className="pt-sans-bold-custom"
          >
            Elements
          </NavLink>
          <NavLink
            to="/features-list"
            style={({ isActive }) => ({
              borderTop: isActive ? "2px solid rgba(21, 169, 227, 1)" : "none",
              color: isActive ? "#15A9E3" : "#184363",
              height: "96px",
              textDecoration: "none",

              display: "flex",
              alignItems: "center",
            })}
            className="pt-sans-bold-custom"
          >
            Features
          </NavLink>
        </div>

        {/* RIGHT WRAPPER */}
        <div className="h2-rightwrapper" style={rightwrapper}>
          <div className="h-96">
            <Repeat2 color="#184363" size={20} />
          </div>
          <div className="h-96">
            <Heart color="#184363" size={20} />
          </div>
          <div className="h-96">
            <ShoppingCart color="#184363" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
