import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FiPower, FiShoppingCart } from 'react-icons/fi'
import { IoMdIceCream } from 'react-icons/io'

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
                        
                        <strong className="senha">
                            SENHA: {pedido.id}
                        </strong>
                        <FiShoppingCart size="33" color="white" 
                        style={{position: 'relative', left: 40, bottom: 45}} />
                        
                        <div style={{position: 'relative', bottom: 15}}>
                            <IoMdIceCream size={22} color="#41414d"/>
                            <strong style={{fontSize: 22, color: '#41414d'}}>
                                Sorvete de {pedido.nome}
                            </strong>
                        </div>
                        
                        <strong className="quantidade">Quantidade: {pedido.quantidade}(X)</strong>
                        <strong className="preco">Preço R$: {pedido.preco}</strong>
                       
                        <img className="imagem" src={pedido.imagem} width={90} height={140} />
                        <button>Entregue</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}