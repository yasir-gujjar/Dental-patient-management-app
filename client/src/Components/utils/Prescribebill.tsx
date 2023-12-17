import Serverurl from './Serverurl'
// import { useNavigate } from 'react-router-dom'
const Prescribebill = async (prescribe: {}) => {


    try {

        const signupapi = await fetch(`${Serverurl}/prescribe`, {
            method: "POST",
            body: JSON.stringify(prescribe),
            headers: {
                "Content-Type": "application/json"
            },

        })
        const doc = await signupapi.json()
        console.log(doc, "navigate this");

    } catch (error) {
        console.log("error while billing try again <->", error);


    }
}

export default Prescribebill
