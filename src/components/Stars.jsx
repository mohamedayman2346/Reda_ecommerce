import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";


export default function Stars({rating}) {

    let goldStar = Math.floor(rating);
    let halfStar = rating - goldStar >= 0.5 ? 1 : 0;
    let emptyStar = 5 - goldStar - halfStar;


  return (
    <div className='flex gap-1.5'>
      {[...Array(goldStar)].map((_, i) => (
        <IoStarSharp key={`gold-${i}`} className="text-yellow-400" />
      ))}

      {[...Array(halfStar)].map((_, i) => (
        <FaStarHalfAlt key={`half-${i}`} className="text-yellow-400" />
        ))}

    {[...Array(emptyStar)].map((_, i) => (
        <IoStarSharp key={`empty-${i}`} className="text-gray-300!" />
    ))  }

    </div>
  )
}
