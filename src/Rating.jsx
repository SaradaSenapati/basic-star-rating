import React from 'react'
import  { useState } from 'react'

const Rating = () => {
    const [rating ,setRating] = useState();
    const[hover, setHover] = useState();

    let arr = new Array(5).fill(0);
   console.log(rating)
  return (
    <>
    <h1>Rating Component</h1>
      <div className='container'>
        
        {
            arr.map((curValue,index)=>{
                return(
                    <span
                    onMouseEnter={()=>setHover(index + 1)}
                    className={hover == 0 && index<rating || index < hover ? "staractive" : "star"}
                     onClick={()=>setRating(index +1)}
                    onMouseLeave={()=>setHover(0)}
                    key={index}>&#9733;</span>
                )
            })
        }
      </div>
    </>
  )
}

export default Rating
