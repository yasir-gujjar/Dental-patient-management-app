import Serverurl from "../utils/Serverurl"


const Sendmsg = async (msg: {}) => {
    try {
        const postmsg = await fetch(`${Serverurl}/sendsms`, {
            method: "POST",
            body: JSON.stringify(msg),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const response = await postmsg.json();
        console.log(response);

        if (response.status === 201) {
            window.location.reload();

        } else {
            alert("message hasn't sent, try again");
        }
    } catch (e) {
        console.log("error while messaging", e);


    }

}
export default Sendmsg;
