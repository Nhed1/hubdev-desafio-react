import React from 'react'
export default function Header() {
    return (
        <header>
            <div className='text-header'>
            <h1>Faça sua empresa chamar <strong>atenção</strong> e atrair <span className='green'>clientes</span></h1>
            <p>HubLocal está aqui impulsionar seu negócio e conectar sua empresa com o resto do mundo.</p>
            <button>Solicite demonstração</button>
            </div>
            <div className='img-header'>
                <img src={require('../assets/Ilustração-Funil-2.png')} alt="Uma pessoa colocando mídias sociais em um funil e saind dinheiro do outro lado" />
            </div>
        </header>
    )
}

