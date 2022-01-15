import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className='contato'>
            <h2 className='footer-h2'>Fale conosco</h2>
            <p className='telefone'>0800 944 1340</p>
            </div>
            <div className="local">
                <h2 className='footer-fortaleza'>Fortaleza</h2>
                <p className='footer-endereco'>Rua Pereira Valente, 578, Sala 1308, Meireles, CEP: 60160-250</p>
            </div>
            <div className="local">
                <h2 className='footer-sp'>São Paulo</h2>
                <p className='footer-endereco'>Alameda Vicente Pinzon, 54 – Vila Olímpia, São Paulo – SP, 04547-130</p>
            </div>
        </footer>
    )
}
