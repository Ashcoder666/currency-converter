import React from 'react'
import './app.css'

const App = () => {
  return (
    <div className='main-body'>
     <h1> Currency Converter </h1>
     <div className='input'>

        <div className='first-row'>
        <input  type="number"/>
         <select>
             <option value="hi" >hi</option>
         </select>
         <p ><i class="fa-solid fa-arrow-right-long"></i></p>
         <select>
             <option value="hi" >hi</option>
         </select>
        </div>



        <div className='second-row'>
        <button>Convert</button>
         <div className='show'></div>
         </div>




        </div>
    </div>
  )
}

export default App
