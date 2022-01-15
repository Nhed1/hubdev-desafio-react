import React from 'react'

interface Props {
    title: string
    img:string
    key: number
}

export default function CardBeneficio(props:Props) {
    return (
        <div key={props.key} id='beneficios' className='card-beneficio'>
            <h2>{props.title}</h2>
            <img src={props.img} alt="Ícones relaciona a divulgação de empresas dentro das redes sociais" />
        </div>
    )
}
