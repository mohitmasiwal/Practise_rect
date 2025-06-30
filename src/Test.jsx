 import React from 'react'
 import  ReactDOM from "react-dom"

 export const TestPortal =()=>{
  return ReactDOM.createPortal(
    <h1> i m thew ordtjrf</h1>,
      document.getElementById('root_2')

  )
 }