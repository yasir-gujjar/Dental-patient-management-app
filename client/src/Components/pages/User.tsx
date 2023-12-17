import { FC } from "react"
import "../Main/css/shared.css"
import { CiHeart, CiMedicalCross } from "react-icons/ci"
import "../Main/css/user.css"
import { NavLink } from "react-router-dom"
import React from "react"

const User: FC = () => {
  return (
    <div className="main-window">
      <h1 className="heading-md">Who are you ?</h1>
      <NavLink className={"user dentist"} rel="noopener norefferer"
        to="/login"><CiMedicalCross /> Dentist</NavLink>


      <NavLink className={"user"} rel="noopener norefferer"
        to="/login"><CiHeart /> Patient</NavLink>

    </div>

  )
}

export default User
