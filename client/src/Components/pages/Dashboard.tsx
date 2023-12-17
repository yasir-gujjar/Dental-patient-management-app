//queries page 
import "../Main/css/sidebar.css"
import Sidebar from "../Main/Sidebar"
import Header from "../Header/Header";
import "../Main/css/dashboard.css"
import { BiSearch } from "react-icons/bi"
import { useEffect, useState } from "react";
import Serverurl from "../utils/Serverurl";
import Uselocalstorage from "../utils/Uselocalstorage";
import { useNavigate } from "react-router-dom";



const Dashboard = () => {

  const [record, setRecord] = useState<UserInfo[]>([])
  const [search, setSearch] = useState("");
  const navigate = useNavigate()

  interface UserInfo {
    no: number;
    pno: number;
    pname: string;
    disease: string;
    treatment: string;
    address: string;
    localdate: string;
    bill: number;
  }

  // api logic 
  const Billrecord = async () => {

    try {
      const pullrecord = await fetch(`${Serverurl}/record`);

      const recordresult = await pullrecord.json()

      setRecord(recordresult)



    } catch (error) {
      console.log(" recordresult-", error)

    }
  }


  if (!Uselocalstorage()) {
    navigate("/login")
  }

  // const handlesearch = (e: { target: { name: any; value: any; }; }) => {
  //   setSearch({
  //     ...search,
  //     [e.target.name]: e.target.value,
  //   })


  // }


  // const Searchalgorithm = async () => {

  //   try {
  //     const getch = await fetch(`${Serverurl}/search`, {
  //       method: "POST",
  //       body: JSON.stringify(search),
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //     })

  //     const response = await getch.json();


  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }

  useEffect(() => {
    // Searchalgorithm()
    Billrecord();
    return () => {
      Billrecord()
    }

  }, [search]);



  return (

    <>


      {/* including header */}
      <Header />
      {/* including sidebar */}
      <Sidebar />

      {/* search bar */}

      <div className="main-window">


        <div className="search-pad">
          <div className="search">

            <BiSearch className={"search-logo"} />

            <input name="search" onChange={((e) => setSearch(e.target.value))} className="bar" type="text" autoComplete="off" />

          </div>
        </div>


        {/* this is mapping part of ui */}

        {
          // below part is getting data on one hand and filtering it with search ter that user puts on search bar and maps on ui

          record.filter((user) =>
            (user.pno.toString().includes(search))

          ).map((info) => {
            return <>
              <div className="tub" key={info.pname}>
                <div className="box">
                  <label >Ph No</label>
                  <p>{info.pno}</p>
                  <label >name</label>
                  <p>{info.pname}</p>
                  <label >Disease</label>
                  <p>{info.disease}</p>
                  <label >Treatment</label>
                  <p>{info.treatment}</p>
                  <label >Address</label>
                  <p>{info.address}</p>
                  <label >Date</label>
                  <p>{info.localdate.split("T")[0]}</p>
                  <label >Bill</label>
                  <p>{info.bill}</p>

                </div>
              </div>
            </>
          })

        }





      </div>
    </>

  )

}


export default Dashboard
