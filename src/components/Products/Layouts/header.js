import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Cart from "../../Cart/cart"
import "./Header.css"
import SearchBox from "../../UI/Search";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/auth";

const Header = ()=>{
    const authState = useSelector((state) => state.auth.user)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleLoginClick = ()=>{
        navigate("/loginPage");
    } 

    const handleLogoutClick = () => {
        dispatch(logout());
    };
    
        return (
            <div className="header">
                <nav className="navbar">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
                <div className="center-nav">
                    <SearchBox/>
                </div>
                <div className="right-nav">

                    <Cart/>
                        {
                           authState && authState.idToken ?
                                (
                                    <div className="auth-icons">
                                        <FontAwesomeIcon icon={faUser} className="user-icon" />
                                        <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" onClick={handleLogoutClick} />
                                    </div>
                                )
                            :
                            <button className="login-button" onClick={handleLoginClick}>Login</button>
                        }
                        
                </div>
            </nav>
            </div>
        );
    }

   
    


export default Header;