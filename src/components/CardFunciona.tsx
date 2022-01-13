import React from 'react'

interface Props {
    key: number
    title : string
    img : string
    text : string
}
export default function CardFunciona(props:Props) {
    return (
        <div className='card-funciona' key={props.key}>
            <h2 className='title-card-funciona'>{props.title}</h2>
            <img className='img-card-funciona' src={props.img} alt="" />
            <p className='text-card-funciona'>{props.text}</p>
        </div>
    )
}