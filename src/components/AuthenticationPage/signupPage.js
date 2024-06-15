import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signupPage.css";
import { signupWithEmailAndPassword } from "../../actions/auth";
import { useDispatch,useSelector } from "react-redux";


const SignupPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading , setLoading] =  useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const authError = useSelector((state) => state.auth.error);
    const authSuccess = useSelector((state) => state.auth.success);
    const handleSignup =  async (e) => {
        e.preventDefault();

        // Validation
        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            setError("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError("");
        setLoading(true)
        

        try {
            await dispatch (signupWithEmailAndPassword(email,password));
          
            
        } catch (error) {
            setError("Signup failed. Please try again.");
        } finally{
            setLoading(false)
        }
       
        
    };

   useEffect(()=>{
    if(authSuccess){
        navigate("/",{replace:true})
    }
   },[authSuccess,navigate])


    return (
        <div className="signup-page">
            {error && <p className="error">{error}</p>}
            {authError && <p className="error">{authError}</p>}
            {authSuccess && <p className="success">Signup successful! You can now log in.</p>}
            {loading && <p className="loading">Signing up...</p>}
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <div className="form-head">
                        <h2>Sign Up</h2>
                    </div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button className="signup-btn" type="submit">Sign Up</button>
                <div className="login-option">
                    <p>Already have an account?{''}
                     <Link to = "/loginPage" className="login-link">
                        Login
                     </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignupPage;
