import React from "react";
import { ReactDOM } from "react";
import { NavLink } from 'react-router-dom';
import Header from './Header';

function NavBar() {

    return (
        <div className="headerNav">
            <Header />
        <div className="navlinks">
            
            <button>
                <NavLink
                to="/"
                exact
                
            >
                Home
            </NavLink>
            </button>
            
            <button>
                <NavLink
                to="/jail"
                exact
            >
                Jail
            </NavLink>
            </button>

            <button>
                 <NavLink
                to="/wanted"
                exact
            >
                Wanted
            </NavLink>
            </button>
           
           <button>
              <NavLink
                to="/comments"
                exact
            >
                    Comments
                </NavLink> 
           </button>
            

        </div>
        </div >
    )
}


export default NavBar;

