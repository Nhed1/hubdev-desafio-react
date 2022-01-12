import React from 'react'
import CardFunciona from './CardFunciona'
import { useState } from 'react'
export default function Main() {

    const cardsFunciona = [
        {
        "title": "Análise de Presença",
        "img": "#",
        "text": "Sua empresa está presente em todos os mapas e listas?"
    }, {
        "title": "Correção de Presença",
        "img": "#",
        "text": "Suas informações corretas e sempre atualizadas."
    },
    {
        "title": "Manutenção de Presença",
        "img": "#",
        "text": "Seu negócio efetivamente divulgado em cada localização."
    },
    {
        "title": "Análise de Resultados",
        "img": "#",
        "text": "Saiba de onde vem seus clientes."
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
    const [cardsBeneficioInfo] = useState(cardsBeneficio)
    const [cardsFuncionaInfo] = useState(cardsFunciona)

    return (
        <main>
            <h2>Como funciona</h2>
            <div className='cards-funciona'>
                {cardsFuncionaInfo.map(card => (
                    <div className='card-funciona'><h2>{card.title}</h2><p>{card.text}</p></div>
                ))}
            </div>
            <h2>Atraia clientes por toda internet</h2>
            <div className='cards-beneficios'>
                {cardsBeneficio.map(card => (
                    <div className='card-beneficio'>
                        <h2>{card.title}</h2>
                    </div>
                ))}
            </div>
            
        </main>
    )
}
