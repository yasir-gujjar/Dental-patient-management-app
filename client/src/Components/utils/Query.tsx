
import Serverurl from './Serverurl'

const Query = async (param: {}) => {
    try {
        const sendquery = await fetch(`${Serverurl}/sendqueries`, {
            method: "POST",
            body: JSON.stringify(param),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const response = await sendquery.json()
        console.log(response);
    } catch (e) {

        console.log("error occured", e);

    }

}

export default Query
