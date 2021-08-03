import React from 'react'


export default function Greetings(props) {
    let text;
    switch(props.lang) {
        case "de": text = <p>Hallo {props.children}</p> 
        break
        case "fr": text = <p>Bonjour {props.children}</p>
        break
        case "es": text = <p>Hola {props.children}</p>
        break


    }
    return (
        <div>
            <div className = "box">
                {text}
            </div>
            
        </div>
    )
}
