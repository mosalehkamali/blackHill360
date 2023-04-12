import React, { useState ,useEffect } from 'react'
import ReactDOM from 'react-dom'
import "./Product.css";
import Biopage from '../Biopage/Biopage';

export let biomain 
export default function Product(props) {


    function openProfail(){
        biomain = <Biopage image={props.image} title={props.title} explain={props.caption} url={props.url}></Biopage>
        window.scrollTo(0, 1);
    }

    return (
        <div className="cart" onClick={openProfail}>
            <div className='proudct'>
                <img src={"https://blackhill360.ir/"+props.image} alt="Product pictur" />
                <div className="title">
                    <p className='productTitle'>{props.title}</p>
                </div>
            </div>
                <div className="caption">
                <p id='coptionbody'>{props.body}</p>
                </div>
        </div>
    )
}