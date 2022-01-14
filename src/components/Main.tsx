import React from 'react'
import CardFunciona from './CardFunciona'
import CardBeneficio from './CardBeneficio'
import '../styles/Main.css'
import { useState } from 'react'

export default function Main() {
    interface CardsFunciona {
        title: string
        img: string
        text: string
    }
    const cardsFunciona = [
        {
        "title": "Análise de Presença",
        "img": "https://hublocal.com.br/wp-content/uploads/2021/03/ILUSTRAC%CC%A7A%CC%83O-DU%CC%81VIDA-2.png",
        "text": "Sua empresa está presente em todos os mapas e listas?",
    }, {
        "title": "Correção de Presença",
        "img": "https://hublocal.com.br/wp-content/uploads/2021/03/ILUSTRAC%CC%A7A%CC%83O-DU%CC%81VIDA-2.png",
        "text": "Suas informações corretas e sempre atualizadas.",

    },
    {
        "title": "Manutenção de Presença",
        "img": "https://hublocal.com.br/wp-content/uploads/2021/03/ILUSTRAC%CC%A7A%CC%83O-DU%CC%81VIDA-2.png",
        "text": "Seu negócio efetivamente divulgado em cada localização.",
    },
    {
        "title": "Análise de Resultados",
        "img": "https://hublocal.com.br/wp-content/uploads/2021/03/ILUSTRAC%CC%A7A%CC%83O-DU%CC%81VIDA-2.png",
        "text": "Saiba de onde vem seus clientes.",
    }]
    const cardsBeneficio = [
        {
            "title": 'Gerenciamento de perfil em tempo real',
            "img": ''
        },
        {
            "title": 'Gerenciamento de dados de localização',
            "img": ''
        },
        {
            "title": 'Integração profunda entre mapas e listas',
            "img": ''
        },
        {
            "title":"Publicações em massa de postagens e conteúdos",
            "img": ''
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
