import "../Main/css/write.css"
import "../Main/css/shared.css"
import Header from "../Header/Header"
import Sidebar from "../Main/Sidebar"
import { AiOutlineMessage, AiOutlineSend } from "react-icons/ai"
import { CiPhone } from "react-icons/ci"
import { useState } from "react"
import Sendmsg from "../utils/Sendmsg"



const Sendmessage = () => {

    const [msg, setMsg] = useState({})
    const handlesubmit = (e: { preventDefault: () => void }) => {
        Sendmsg(msg);
        e.preventDefault()

    }
    const handlechange = (e: { target: { name: any; value: any } }) => {

        setMsg({
            ...msg,
            [e.target.name]: e.target.value,
        });

    }

    return (
        <>
            <Header />
            <Sidebar />
            <div className="page">
                <div className="form">
                    <form className="sms" onSubmit={handlesubmit} autoComplete="off">



                        <h3 className="heading-text">Send sms</h3>

                        <CiPhone /><input type="text" capture placeholder="phone number" onChange={handlechange} className="field" name="receiver" />


                        <AiOutlineMessage /><textarea placeholder="Message..." onChange={handlechange} name="message" id="" cols={10} className="field" rows={5}></textarea>

                        <button className="btn-submit">Post  <AiOutlineSend /></button>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Sendmessage
