import { IoIosPaper } from 'react-icons/io'
import { PiPillBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import "../Main/css/sidebar.css"
import { AiOutlineMessage, AiOutlinePlusCircle } from 'react-icons/ai'
const Sidebar = () => {
    const location = useLocation()
    return (
        <>

            <section className="header">
                <div className="header-menu">

                    <nav>

                        <Link className={location.pathname === "/dashboard" ? "active" : ""} to="/dashboard">
                            <IoIosPaper />record

                        </Link>

                        <Link className={location.pathname === "/queries" ? "active" : ""} to={"/queries"}>
                            <AiOutlinePlusCircle />queries
                        </Link>



                        <Link className={location.pathname === "/prescribe" ? "active" : ""} to={"/prescribe"}>
                            <PiPillBold />write
                        </Link>

                        <Link className={location.pathname === "/sendsms" ? "active" : ""} to='/sendsms'>
                            <AiOutlineMessage />sms
                        </Link>

                    </nav>
                </div>


            </section>

            <h2 className='h-heading'>{location.pathname.replace("/", "")}</h2>
        </>
    )
}

export default Sidebar
