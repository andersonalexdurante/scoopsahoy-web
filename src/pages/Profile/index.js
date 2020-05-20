import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'

import './styles.css'
import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

export default function Profile() {

    const history = useHistory()

    function handleLogout() {
        history.push('/');
    }


    return (
        <div className="profile-container">
            
            <header>
                <img src={logoImg} alt="Scoops Ahoy"/>
            
                <Link className="button" to="/incidents/new">Cadastrar novo sorvete</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size="18" color="#e02041" />
                </button>
            </header>

            <div className="menu">
                <span>Pedidos</span>
                <span>Histórico</span>
            </div>

        </div>
    )
}