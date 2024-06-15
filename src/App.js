
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Products/Layouts/header";
import SubHeader from "./components/Products/Layouts/SubHeader";
import Products from "./components/Products/products";
import NotFound from "./components/PageNotFound/notFound";
import LoginPage from "./components/AuthenticationPage/loginPage";
import SignupPage from "./components/AuthenticationPage/signupPage";
import { useEffect } from "react";
import { checkUserLoggedIn } from "./actions/auth";
import { useDispatch } from "react-redux";

const App=() =>{
const dispatch =useDispatch()

  useEffect(() => {
    dispatch(checkUserLoggedIn(()=>{}))
  })

  return (
    <div >
      <Header />
      <SubHeader/>
      <Routes>
        <Route  path="/:category?"  element={<Products />}/>
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signupPage" element={<SignupPage/>}/>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to={"/404"}  replace />}/>
      </Routes>
      
    </div>
  );
}

export default App;
