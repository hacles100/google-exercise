import './Login.css'
import { useRef } from "react";

function Login(){

    const credencial = ([

        {
            user: 'Hericles',
            pass: 12345678
        },

        
        {
            user: 'Emex',
            pass: 87654321
        }
    ])


    const userNameInput = useRef()
    const userPasswordInput = useRef()
    
    
    

    function login(){

        const userName = userNameInput.current.value
        const userPassword = userPasswordInput.current.value
        
        for(let acess of credencial){

            if(acess.user === userName && acess.pass === userPassword){
                alert('Login com sucesso')
                return
            }
        }

        alert('Dados incorretos')
    }

    return(

        <div className='login'>
            <label>UserName:</label> <br/>
            <input type='text' ref={userNameInput}></input> <br/>
            <label>Password:</label> <br/>
            <input type='Password' ref={userPasswordInput}></input> <br/>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login