import { FC, useState } from "react";
import "../Main/css/sidebar.css";
import { CiLock, CiUser } from "react-icons/ci";
import Login from "./Login";


// frontend data sending snippet
const Signup: FC = () => {
  const [form, setForm] = useState({});



  //  console.log(Serverurl);

  const handlesubmit = (e: any) => {
    console.log(form);
    e.preventDefault();
    Login(form);
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
          <h3 className="heading">login</h3>
          <form onSubmit={handlesubmit}>
            <label className="label-bar">
              <CiUser />
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

            <div className="navigate-link"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
