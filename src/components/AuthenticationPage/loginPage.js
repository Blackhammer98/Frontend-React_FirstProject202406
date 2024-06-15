import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./loginPage.css"
import { loginWithEmailAndPassword } from "../../actions/auth"
import { useDispatch,useSelector } from "react-redux"
const LoginPage = () =>{
    

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [error , setError] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const authError = useSelector((state) => state.auth.error);
    const authSuccess = useSelector((state) => state.auth.success);
    const handleLogin = async (e) =>{

        e.preventDefault()

        if(email===""||password===""){
            setError("Username and Password are required")
            return;
        }
        setError("")
        setLoading(true)


        try {
            await dispatch(loginWithEmailAndPassword(email, password));


        } catch (error) {
            setError("Login failed. Please try again.");
        } finally {
            setLoading(false)
        }

        
    }

    useEffect(()=>{
      if(authSuccess){
          navigate("/", { replace: true })
      }
    },[navigate,authSuccess])

return(
    <div className="login-page">
        {error && <p className="error">{error}</p>}
        {authError && <p className="error">{authError}</p>}
        {authSuccess && <p className="success">Login successful! You can now Shopping.</p>}
        {loading && <p className="loading">Login up...</p>} 
        <form onSubmit={handleLogin} >
            <div className="form-group">
                <div className="form-head">
                    <h2>Login</h2>
                   
                </div>
                <label htmlFor="username">Email:</label>
                <input
                    type="text"
                    id="username"
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
            <button className="login-btn" type="submit" >Login</button>
            <div className="signup-option">
                <p>Don't have an account?{""}
                    <Link to="/signupPage" className="signup-link">
                        Sign Up
                    </Link>
                </p>
            </div>
        </form>
        
    </div>
    
    
)

}

export default LoginPage