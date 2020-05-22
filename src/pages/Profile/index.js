import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'

import './styles.css'
import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

export default function Profile() {

    const [pedidos, setPedidos] = useState([])
   

    const history = useHistory()

    function handleLogout() {
        history.push('/');
    }

    useEffect(() => {
        api.get('profile').then( res => {
            setPedidos(res.data)
        })
    })


    return (
        <div className="profile-container">
            
            <header>
                <img src={logoImg} alt="Scoops Ahoy"/>
                
                <button onClick={handleLogout} type="button">
                    <FiPower size="18" color="#e02041" />
                </button>
            </header>

            <div className="menu">
                <div className="pedidos">
                    <span>Pedidos</span>
                </div>

                <div className="pedidos">
                    <span>Histórico</span>
                </div>
            </div>

            <ul> 
                {pedidos.map(pedido => (
                    <li key={pedido.id}>
                        <strong>{`SENHA ${pedido.id}`}</strong>

                        <strong>QUANTIDADE:</strong>
                        <p>{pedido.quantidade}</p>

                        <strong>PREÇO:</strong>
                        <p>{pedido.preco}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}