import React from 'react'
import '../styles/Header.css'
export default function Header() {
    return (
        <header>
            <div className='text-header'>
            <h1>Faça sua empresa chamar atenção e atrair clientes</h1>
            <p>HubLocal está aqui impulsionar seu negócio e conectar sua empresa com o resto do mundo.</p>
            <button>Solicite demonstração</button>
            </div>
            <div className='img-header'>
                <img src="#" alt="Uma pessoa colocando mídias sociais em um funil e saind dinheiro do outro lado" />
            </div>
        </header>
    )
}

