
import { useRef, useState } from "react";

import './Phone.css'

function Phone(){


    const userNameInput = useRef()
    const userPasswordInput = useRef()
    const [message, setMessage] = useState('')
    

    
    function add(){

        const credencial = [];
    

        const userName = userNameInput.current.value
        const userPassword = userPasswordInput.current.value
        
        for(let acess of credencial){

            if(acess.user === userName && acess.pass === userPassword){
                // alert('Login com sucesso')
                setMessage(userName)
                return
            }
        }

        // alert('Dados incorretos')
        setMessage(userName)
    }

    return (
        <div>
             <label>UserName:</label> <br/>
            <input type='text' ref={userNameInput}></input> <br/>
            <label>Phone:</label> <br/>
            <input type='Password' ref={userPasswordInput}></input> <br/>
            <button onClick={add}>Add</button>
            <div className="particular">{message}</div>
        </div>
    )
}

export default Phone