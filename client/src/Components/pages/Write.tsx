import { useState } from "react"
import "../Main/css/write.css"
import Prescribebill from "../utils/Prescribebill"
import { useNavigate } from "react-router-dom"


const Write = () => {
    const navigate = useNavigate()

    const [prescribe, setPrescribe] = useState({})
    // const [select, setSelect] = useState()

    const handlesubmit = (e: any) => {
        // console.log(prescribe);
        e.preventDefault();

        if (!prescribe) {
            alert("all fields are required")
        }
        else {
            Prescribebill(prescribe)
            window.print()
            navigate("/dashboard")
        }
    }

    const handlechange = (e: any) => {
        setPrescribe({
            ...prescribe,
            [e.target.name]: e.target.value,
        })
    }

    // date string 
    let localdate = Date().split("G")[0]

    return (
        <>

            {/* ui code */}
            <div className="print-box">

            </div >

            <div className="modal" id="modal">


                <div className="page">
                    <div className="form">


                        <form onSubmit={handlesubmit} autoComplete="off">
                            <h3 onPointerEnter={handlesubmit} className="brand-name"><img src="./icon/citydentalcare.png" alt="city dental care" height={50} /> City Dental Care</h3>
                            <p className="sup-point">opp:family hospital near pizza master lodhran</p>
                            <label className="l">name
                            </label>
                            <input onChange={handlechange} name={"pname"} type="text" className="field" autoFocus />

                            <label className="l">gender
                            </label>
                            <input type="text"
                                className="field" name="gender" onChange={handlechange} />

                            <label className="l">Ph no
                            </label>
                            <input onChange={handlechange} name={"pno"} type="text" className="field" />

                            <label className="l">disease
                            </label>

                            <input onChange={handlechange} name={"disease"} type="text" className="field">

                            </input>

                            <label className="l">suffer period
                            </label>

                            <select onChange={handlechange} className="field" name="sufferperiod" id="">
                                <option >1 days</option>
                                <option >2 days</option>
                                <option >3 days</option>
                                <option >4 days</option>
                                <option >5 days</option>
                                <option >6 days</option>
                                <option >7 days</option>
                                <option >1 week</option>
                                <option >2 weeks</option>
                                <option value="3 or more weeks">3 or plus weeks</option>
                            </select>

                            <label className="l">treatment
                            </label>

                            <input onChange={handlechange} name={"treatment"} type="text" className="field" />



                            <label className="l">address
                            </label>

                            <input onChange={handlechange} name={"address"} type="text" className="field" />



                            <label className="l">bill
                            </label>

                            <input onChange={handlechange} name={"bill"} type="text" className="field" />
                            <div className="price">Rs-/</div>

                            <p>{localdate}</p>


                            <pre className="nanosoft">This software is provided by HexaDisk 03306489676</pre>


                        </form>
                    </div>
                </div></div>


        </>
    )
}

export default Write
