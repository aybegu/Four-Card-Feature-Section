import { useState } from 'react'

export default function Card(props){
    return (
        <div className='card'>
            <div className="card--line"></div>
            <h3 className='card--title'>{props.title}</h3>
            <p className='card--text'>{props.text}</p>
            <img src={props.image} className='card--image'/>
        </div>
    )
}