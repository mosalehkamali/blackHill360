import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import "./Biopage.css";



export default function Biopage(props) {


    return (
        <div className="biopage">
            <div className="bioimg">
                <img src={"https://blackhill360.ir/"+props.image} alt="bioimage" />
            </div>
            <div className="explane">
                <h1>{props.title}</h1>
                <p>{props.explain}</p>
                <a className='downloadBtn' href=''> Download biography PDF</a>
            </div>
        </div>
    )
};