"use client"

import { useState } from "react"

export default function LikeDislik(){
    const [like, setLike] = useState(0);
    const [disLike, setDisLike] = useState(0);

    const handleLike = ()=>{
        setLike(1);
        setDisLike(0);
    }

    const handleDisLike = ()=>{
        setLike(0);
        setDisLike(1);
    }

    return(
        <div>
            <span className={`icon like ${like===1?'active':''}`} onClick={handleLike}>&#128077; Yes</span>
            <span className={`icon dislike ${disLike===0?'':'active'}`} onClick={handleDisLike}>&#128078; NO</span>
        </div>
    )
}