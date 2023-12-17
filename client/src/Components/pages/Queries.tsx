//queries page 
import "../Main/css/sidebar.css"
import Sidebar from "../Main/Sidebar"
import Header from "../Header/Header";
import "../Main/css/dashboard.css"
import { useEffect, useState } from "react";
import Serverurl from "../utils/Serverurl";




const Dashboard = () => {

    const [patientqueries, setPatientqueries] = useState<iPatient[]>([])


    interface iPatient {
        no: number;
        pno: number;
        sufferperiod: string;
        name: string;
        disease: string;
        gender: string;
        address: string;
        date: string; // Assuming localdate is a string in ISO format (e.g., "2023-12-02T10:30:00")
        note: string;
    }




    // api logic 
    const Queryrequest = async () => {

        try {
            const pullrecord = await fetch(`${Serverurl}/patientqueries`)
            const recordresult = await pullrecord.json()

            setPatientqueries(recordresult)



        } catch (error) {
            console.log(" queries-", error)

        }
    }





    useEffect(() => {
        // Searchalgorithm()
        Queryrequest();
        return () => {
            Queryrequest()
        }

    }, []);




    return (

        <>

            {/* including header */}
            <Header />
            {/* including sidebar */}
            <Sidebar />

            {/* search bar */}

            <div className="main-window">







                {/* map high orser method is used in below */}

                {

                    patientqueries.map((info) => {
                        return <>
                            <br />
                            <div className="tub" key={info.name}>
                                <div className="box">
                                    <label >name</label>
                                    <p>{info.name}</p>

                                    <label >gender</label>
                                    <p>{info.gender}</p>

                                    <label >Ph No</label>
                                    <p>{info.pno}</p>

                                    <label >Disease</label>
                                    <p>{info.disease}</p>

                                    <label >suffering from</label>
                                    <p>{info.sufferperiod}</p>
                                    <label >Treatment</label>

                                    <p>{info.address}</p>
                                    <label >Date</label>
                                    <p>{info.date}</p>
                                    <label >note</label>
                                    <p>{info.note}</p>

                                </div>
                            </div>
                        </>
                    })



                }



            </div >
        </>

    )

}

export default Dashboard
