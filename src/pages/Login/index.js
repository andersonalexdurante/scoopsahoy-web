import React from 'react'

import api from '../../services/api'
import './styles.css'

import iceCream from '../../assets/iceCream.svg'
import logo from '../../assets/logo.svg'

export default function Login() {

    return (
        <div className="logon-container">
            <span id="text-background">SCOOPS AHOY</span>
            <img className="cream-image" src={iceCream} alt="Heroes" />

            <section className="form">
                <img src={logo} alt="Scoops Ahoy"/>

                <form >
                    <h1>Login do administrador</h1>

                    <input 
                        placeholder="Senha"
        
                    />
                    <button className="button" type="submit" >Entrar</button>

                    
                </form>

            </section>
    
        </div>
    )
}