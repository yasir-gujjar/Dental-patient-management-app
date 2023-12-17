import { FC, useState } from "react";
import "./signup.css";
import { CiLock, CiMail } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import Postsignup from "../../utils/Postsignup";
import React from "react";


const Signup: FC = () => {

  const navigate = useNavigate()
  const [form, setForm] = useState({});


  const handlesubmit = (e: any) => {

    Postsignup(form)
    e.preventDefault();
    navigate("/")
  };

  function handlechange(e: any): void {
    setForm({
      ...form,
      [e.target.name]: e.target.value,

    });
  }


  return (
    <div className="background">
      <div className="detail-page">
        <div className="main-page">
          <h3 className="heading">Signup now</h3>
          <form onSubmit={handlesubmit}>
            <label className="label-bar">
              <CiMail /> Email
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
              Password
            </label>
            <input
              name="password"
              onChange={handlechange}
              type="text"
              className="field"
              autoComplete="off"
            />

            <button className="btn submit" type="submit">
              Submit
            </button>

            <div className="navigate-link">
              <span>Already have an account</span>
              <NavLink to={"/login"}>login</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
