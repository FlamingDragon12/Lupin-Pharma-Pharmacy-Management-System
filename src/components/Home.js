import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="py-5 ml-auto">
            <Link to="/login" class="w-full">
              <button
                className={`w-full py-2 px-12 text-sm  cursor-pointer text-black rounded-lg`}
              >
                Login
              </button>
            </Link>
          </div>
            
    </div>
  )
}

export default Home