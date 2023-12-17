import React, { useState } from "react"
import "../Main/css/write.css"
import { Link, useNavigate } from "react-router-dom"
import "../Main/Signup/signup.css"
import "../Main/css/shared.css"
import { BiArrowBack } from "react-icons/bi"
import Query from "../utils/Query"

const Sendquery = () => {
    const navigate = useNavigate()
    const [query, setquery] = useState({})

    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setquery({
            ...query,
            [e.target.name]: e.target.value
        })
    }

    const handlesubmit = (e: { preventDefault: () => void }) => {

        if (!query) {
            alert("all fields are required")
        } else {
            Query(query)
            navigate("/")
            e.preventDefault()
        }
    }
    return (
        <>


            <div className="page">
                <div className="form">

                    <Link to={"/"}> <div className="goback">
                        <BiArrowBack /></div></Link>


                    <h3 className="heading">Share disease info with dentist</h3>
                    <form onSubmit={handlesubmit}>
                        <label className="label-bar">
                            Name
                        </label>
                        <input
                            name="name"
                            onChange={handlechange}
                            type="text"
                            className="field"
                            autoComplete="off"
                            autoFocus={true}
                        />
                        <label className="label-bar">
                            Phno
                        </label>
                        <input
                            name="pno"
                            onChange={handlechange}
                            type="text"
                            className="field"
                            autoComplete="off"
                        />


                        <label className="label-bar">
                            Gender
                        </label>
                        <input
                            name="gender"
                            onChange={handlechange}
                            type="text"
                            className="field"
                            autoComplete="off"
                        />
                        <label className="label-bar">
                            Disease
                        </label>
                        <input
                            name="disease"
                            onChange={handlechange}
                            type="text"
                            className="field"
                            autoComplete="off"
                        />
                        <label className="label-bar">
                            address
                        </label>
                        <input
                            name="address"
                            onChange={handlechange}
                            type="text"
                            className="field"
                            autoComplete="off"
                        />
                        <label className="label-bar">
                            sufferperiod
                        </label>
                        <input
                            name="sufferperiod"
                            onChange={handlechange}
                            type="text"
                            className="field"
                            autoComplete="off"
                        />

                        <label className="label-bar">
                            Date
                        </label>
                        <input
                            name="date"
                            onChange={handlechange}
                            type="date"
                            className="field"
                            autoComplete="off"
                        />

                        <label className="label-bar">
                            additional note
                        </label>
                        <input
                            name="note"
                            onChange={handlechange}
                            type="text"
                            className="field"
                            autoComplete="off"
                        />
                        <div className="mainpage" >

                            <button className="btn submit" type="submit">
                                Submit
                            </button>

                        </div>

                    </form>
                </div >
            </div >

        </>)
}

export default Sendquery
