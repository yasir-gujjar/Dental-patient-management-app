import { FC } from "react";
import "./css/landingpage.css";
import "./css/shared.css";
import Header from "../Header/Header"
import { Link } from "react-router-dom";
import { PiPhoneCallFill } from "react-icons/pi";
import { CiPaperplane } from "react-icons/ci";
import Uselocalstorage from "../utils/Uselocalstorage";


const Landingpage: FC = () => {


  {
    if (Uselocalstorage()) {

      window.location.href = "/dashboard";
    }
  }
  return (
    <>
      <Header />
      <section className="main-window">

        <h1 className="main-heading"><span className="city">City</span> Dental Care</h1>
        <p>Opposite family hospital near pizza master lodhran</p>

        <h3 className="tagline">Doctor Muhammad Umer</h3>
        <sub>BDS(UHS), RDS(PM&DC)</sub>
        <br />
        <p>Ex Dental Surgeon THQ HOSPITAL Muzaffar Garh</p>

        <p>Ex Dental Surgeon RHC Makhdoom Aali</p>

        {/* this is main section */}
        <div className="main-section">



          <br />
          <a className="call-now" href="tel:03017497589"> <PiPhoneCallFill />callnow</a>


          <br />
          <img src="./assets/teethss.png" alt="" height={80} />
          <br />
          <img src="./assets/teeths.png" alt="" height={60} />
          <hr />
          <Link className="gotoquery" to="/sendquery">
            send your health report  <CiPaperplane />

          </Link>
        </div>
        <div className="banner">
          <img className="surgery" src="./assets/dentalsurgery.jpg" alt="lodhrandentist" />
          <img className="dental-card" src="./assets/citydentalcare.jpg" alt="citydentalcare" />

        </div>
      </section>
    </>
  );
};

export default Landingpage;
