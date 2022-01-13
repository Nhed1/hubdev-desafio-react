import React from 'react'

interface Props {
    title: string
    img:string
}

export default function CardBeneficio(props:Props) {
    return (
        <div className='card-beneficio'>
            <h2>{props.title}</h2>
            <img src={props.img} alt="" />
        </div>
    )
}
