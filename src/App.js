import React,{useState,useEffect} from 'react'
import './app.css'
import Axios from 'axios'


const App = () => {
  const [curr,setCurr] = useState([])
  const [from,setFrom] = useState('')
  const [too,setTo] = useState('')
  const [amount,setAmount] = useState(1)
  const [resVal,setresVal] = useState(0)
  const apikey= '931780ff9724828396d33f0f59e6bb05';
  const fetchCurr = async()=>{
    await Axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=${apikey}`).then(res=>{
      try{
        setCurr([res.data.base,...Object.keys(res.data.rates)])
        setFrom(res.data.base)
        const firstcurrency= Object.keys(res.data.rates)[0]
        setTo(firstcurrency)
      }catch(err){
        console.log(err)
      }
    })
  }
  useEffect(()=>{
    fetchCurr()
  },[])
  
  const fetchResult = async() =>{
      
    


    var options = {
      method: 'GET',
      url: 'https://currency-exchange.p.rapidapi.com/exchange',
      params: {from: from, to: too, q: amount},
      headers: {
        'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
        'x-rapidapi-key': 'c256ecdf6emshcedc5242d337c13p19a862jsnee79af877651'
      }
    };
    
    await Axios.request(options).then(function (response) {
      console.log(response.data)
      setresVal(response.data*amount)
    }).catch(function (error) {
      console.error(error);
    });






      
  }
  return (
    <div className='main-body'>
     <h1> Currency Converter </h1>
     <div className='input'>

        <div className='first-row'>
        <input  type="number" onChange={(e)=>{setAmount(e.target.value)}}/>
         <select value={from} onChange={(e)=>{setFrom(e.target.value)}} >
        {curr.map((obj,i)=>{
          return <option key={i}  value={obj} >{obj}</option>
        })}
             
         </select>
         <p ><i class="fa-solid fa-arrow-right-long"></i></p>
         <select value={too} onChange={(e)=>{setTo(e.target.value)}}  >
         {curr.map((obj,i)=>{
          return <option key={i} value={obj} >{obj}</option>
        })}
         </select>
        </div>



        <div className='second-row'>
        <button onClick={fetchResult}>Convert</button>
         <div className='show'>
           <h4>{resVal}</h4>
         </div>
         </div>




        </div>
    </div>
  )
}

export default App
