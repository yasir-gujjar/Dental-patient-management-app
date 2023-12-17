import { FC } from 'react'
import './notfound.css'
import { Link, useParams } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi"

const Notfound: FC = () => {
  const Params = useParams();
  return (
    <div className='main-error'>

      <h1 className='error-msg'>Error occured</h1>
      <h2 className='error'>404 not found</h2>

      <br />

      <b className='error-detail'>{Params.id} is not found on server
      </b>
      <Link title={"go back"} to="/"><BiArrowBack /> </Link>


    </div>
  )
}

export default Notfound
