import React from 'react'
import CardFunciona from './CardFunciona'
import CardBeneficio from './CardBeneficio'
import { useState } from 'react'

export default function Main() {
  
    const cardsFunciona = [
        {
        "title": "Análise de Presença",
        "img": "https://hublocal.com.br/wp-content/uploads/2021/03/ILUSTRAC%CC%A7A%CC%83O-DU%CC%81VIDA-2.png",
        "text": "Sua empresa está presente em todos os mapas e listas?",
        "alt": "Homem pensando com ícones de mapas e localizações"
    }, {
        "title": "Correção de Presença",
        "img": "https://hublocal.com.br/wp-content/uploads/2021/03/Ilustrac%CC%A7a%CC%83o-Atualizac%CC%A7a%CC%83o.png",
        "text": "Suas informações corretas e sempre atualizadas.",
        "alt": "Homem buscando informações em uma lista de paginas"


    },
    {
        "title": "Manutenção de Presença",
        "img": "https://hublocal.com.br/wp-content/uploads/2021/03/Ilustrac%CC%A7a%CC%83o-Divulgac%CC%A7a%CC%83o.png",
        "text": "Seu negócio efetivamente divulgado em cada localização.",
        "alt": "Um megafone saindo de um celular, representando divulgações em redes sociais"

    },
    {
        "title": "Análise de Resultados",
        "img": "https://hublocal.com.br/wp-content/uploads/2021/03/Ilustrac%CC%A7a%CC%83o-Estatisticas-1.png",
        "text": "Saiba de onde vem seus clientes.",
        "alt": "Duas pessoas fazendo análise de resultados"
    }]
    const cardsBeneficio = [
        {
            "title": 'Gerenciamento de perfil em tempo real',
            "img": 'https://hublocal.com.br/wp-content/uploads/2021/03/Tempo-Real-Branco.png',
        },
        {
            "title": 'Gerenciamento de dados de localização',
            "img": 'https://hublocal.com.br/wp-content/uploads/2021/03/Limpeza-de-dados-branco.png'
        },
        {
            "title": 'Integração profunda entre mapas e listas',
            "img": 'https://hublocal.com.br/wp-content/uploads/2021/03/Integrac%CC%A7a%CC%83o-mapas-e-listas-branco.png'
        },
        {
            "title":"Publicações em massa de postagens e conteúdos",
            "img": 'https://hublocal.com.br/wp-content/uploads/2021/03/Postagens-Branco.png'
        }
    ]
    return (
        <main>
            <h2 className='title-funciona'>Como funciona</h2>
            <div className='cards-funciona'>
                {cardsFunciona.map(function(card,index) {
                    return (<CardFunciona  
                    title={card.title}
                    text={card.text}
                    img={card.img}
                    alt={card.alt}
                    key={index}/>)
})}
            </div>
            <h2>Atraia clientes por toda internet</h2>
            <div className='cards-beneficios'>
                {cardsBeneficio.map(function(card,index){
                    return <CardBeneficio
                    title={card.title}
                    img={card.img}
                    key={index}/>
                })}
            </div>
            
        </main>
    )
}
