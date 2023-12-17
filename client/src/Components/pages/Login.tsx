import { FC, useState } from "react";
import "../Main/css/sidebar.css";
import { CiLock } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import "../Main/Signup/signup.css"
import Loginapi from "../utils/Login"
import { AiOutlineMail } from "react-icons/ai";



// frontend data sending snippet
const Login: FC = () => {
  const [form, setForm] = useState({});



  const handlesubmit = async (e: any) => {
    e.preventDefault();

    Loginapi(form);

  };
  function handlechange(e: any): void {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  // api login call


  return (
    <div className="background">
      <div className="detail-page">
        <div className="main-page">
          <form onSubmit={handlesubmit}>
            <h3 className="heading">login</h3>
            <label className="label-bar">
              <AiOutlineMail />
            </label>
            <input
              name="email"
              onChange={handlechange}
              type="text"
              className="field"
              autoComplete="off"
            />
            <label className="label-bar">
              <CiLock />
            </label>
            <input
              name="password"
              onChange={handlechange}
              type="text"
              className="field"
              autoComplete="off"
            />


            <button className="btn submit" type="submit">
              Continue
            </button>


            <div className="navigate-link">
              <span>Not have an account</span>
              <NavLink to={"/signup"}>Register</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;




