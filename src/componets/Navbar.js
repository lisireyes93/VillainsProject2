import React from "react";
import { ReactDOM } from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {

    return (
        <div className="navlinks">
            <NavLink
                to="/jail"
                exact
            >
                Jail.
            </NavLink>
            <NavLink
                to="/wanted"
                exact
            >
                Wanted.
            </NavLink>
            <NavLink
                to="/comments"
                exact
            >
                Comments
            </NavLink>



        </div>
    )
}


export default NavBar;

