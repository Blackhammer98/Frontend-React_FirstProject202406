import { NavLink } from "react-router-dom";
import "./SubHeader.css"

const SubHeader=()=>{

    return(
        <div className="Sub-Header">
           
           <nav className="Subheader-navbar">
            <ul className="Subheader-nav-list">
                    <div className="Navbar-list">
                        <li><NavLink to="/"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "black"
                                    : "black",
                                textDecoration:"none"    
                            })}
                            >Home
                            </NavLink></li>
                        <li><NavLink to="/category-1"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "black"
                                    : "black",
                                textDecoration: "none"    
                            })}
                            >Category 1
                            </NavLink> </li>
                        <li><NavLink to="/category-2" 
                        style={({ isActive }) => ({
                            color: isActive
                                ? "black"
                                : "black",
                            textDecoration: "none"    
                        })}
                          >Category 2
                          </NavLink></li>
                        <li><NavLink to="/category-3" 
                        style={({ isActive }) => ({
                            color: isActive
                                ? "black"
                                : "black",
                            textDecoration:"none"    
                        })}
                        >Category 3
                        </NavLink></li>
                        </div>
            </ul>
           </nav>

        </div>
    )
}

export default SubHeader;