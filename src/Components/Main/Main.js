import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import "./Main.css";
import Product,{biomain}  from './product/Product';

export default function Main(props) {

  const [biography, setBiography] = useState()


  function fetchData() {
    fetch('https://blackhill360.ir/blog2/post/')
      .then(response => response.json())
      .then(data =>  handleData(data))
  }
  
  function handleData(data) {
    console.log(data)
    setBiography(data.map((datas) => (
      <Product title={datas.user} body={datas.title} image={datas.image} caption={datas.body} url={datas.url}></Product>
    )))
  }
    fetchData();

  return (
    <div id="Main" className={props.movemain}>
        {biomain}
      <div id="Biographys">
        <h2><u>Biographys</u></h2>
      </div>
      <div className="content">
        {biography}
      </div>
    </div>
  )
}