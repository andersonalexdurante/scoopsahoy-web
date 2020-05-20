import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'
import iceCream from '../../assets/iceCream.svg'
import logo from '../../assets/logo.svg'

export default function Login() {

    const [senha, setSenha] = useState('')
    const history = useHistory()

    function handleLogin(e) {
        e.preventDefault()

        if(senha === "admin") {
            history.push('/profile')
        }
        else {
            alert('Falha no login, tente novamente.')
        }
    }

    return (
        <div className="logon-container">

            <img className="cream-image" src={iceCream} alt="Heroes" />

            <section className="form">
                <img src={logo} alt="Scoops Ahoy"/>

                <form onSubmit={handleLogin}>
                    <h1>Login</h1>

                    <input 
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <button className="button" type="submit" >Entrar</button>

                    
                </form>

            </section>
    
        </div>
    )
}