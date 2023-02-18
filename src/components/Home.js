import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='home'>
        <div className='student'>STUDENT DATABASE</div>
        <div className='Login'>
            <button type="submit" className='LoginButton'>
                <Link to="/Login" className='colorchange'>Login</Link>
            </button>
            
        </div>

        <div className='Register'>
            <button type="submit" className='RegisterButton'>
                <Link to="/Register" className='colorchange'>Register</Link>
            </button>
        </div>
      
    </div>
  )
}

export default Home
