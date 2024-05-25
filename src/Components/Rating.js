"use client"
import { useState } from "react"

export default function Rating(){
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return(
        <div>
            {
                [1,2,3,4,5].map((starCount)=>{
                    return(
                        <button key={starCount}
                        onClick={()=>setRating(starCount)}
                        onMouseOver={()=>setHover(starCount)}
                        onMouseLeave={()=>setHover(rating)}
                        >
                            <span className={`star ${starCount <= (rating && hover)?'on':'off'}`}>&#9733;</span>
                        </button>
                    )
                })
            }
        </div>
    )
}