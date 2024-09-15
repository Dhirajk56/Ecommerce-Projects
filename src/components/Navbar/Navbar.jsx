import React from "react";
import LinkWithIcon from "./LinkWithIcon";
import Rocket from "../../assets/rocket.png";
import star from "../../assets/glowing-star.png";
import idbutton from "../../assets/id-button.png";
import order from "../../assets/package.png";
import memo from "../../assets/memo.png";
import lock from "../../assets/locked.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className=" align_center navbar">
      <div className="align_center ">
        <h1 className="navbar_heading">Card Wish</h1>
        <form className="navbar_form align_center">
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Products"
          />
          <button type="submit" className="search_button">
            search
          </button>
        </form>
      </div>
      <div className="align_center navbar_links">
        <LinkWithIcon title="Home" links="/" emoji={Rocket} />
        <LinkWithIcon title="Products" links="/Products" emoji={star} />
        <LinkWithIcon title="LogIn" links="/login" emoji={idbutton} />
        <LinkWithIcon title="SignUp" links="/signup" emoji={memo} />
        <LinkWithIcon title="MyOrders" links="/myorders" emoji={order} />
        <LinkWithIcon title="LogOut" links="/logout" emoji={lock} />
        <NavLink to="/cart" className="align_center">
          cart <p className="align_center cart_counts">0</p>
        </NavLink>
      </div>
    </nav>
  );
};
