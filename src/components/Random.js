import React from 'react'

<h1>Random</h1>

export default function Random({min, max})  {
    
        let randomnum = Math.floor(Math.random()*(max - min) + min)
    

    return (
        <div className="box">
            <p> Random value between {min} and {max} = {randomnum}</p>

          
        </div>
    )

}