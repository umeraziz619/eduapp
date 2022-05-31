import React from 'react'
import spinner from "../assests/loading.gif"
const Spinner = () => {
  return (
    <div className="text-center">
    <img className="my-4" src={spinner} height={200} width={200} alt="loading"/>
    
</div>
  )
}

export default Spinner