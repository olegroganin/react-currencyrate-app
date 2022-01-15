import React from 'react';
import {useState} from 'react';
import arrows from '../arrows.png'


const Currencyconverter = ({buyusd, buyeur, buyrub, saleusd, saleeur, salerub }) => {
   const [inputbuy, setInputbuy] = useState(100)
	const [resultbuy, setResultbuy] = useState(0);
	const [inputsale, setInputsale] = useState(100);
	const [resultsale, setResultsale] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
	}
	
	const handleChange = (e) => {
	   setResultbuy(0)
	   setInputbuy(e.target.value)
	}
	
	const handleChange2 = (e) => {
	   setResultsale(0)
	   setInputsale(e.target.value)
	}
	
	function calculateResultBuy (e) {
	   setResultbuy(Number(e.target.value*inputbuy).toFixed(2))
	}
	
	function calculateResultSale (e) {
	   setResultsale(Number(e.target.value*inputsale).toFixed(2))
	}
	
   return (
	   <div>
	      <div className='container'>
		      <div className='currencyconverter'>
	            <h2>Конвертер валют</h2>
		         <div className='forms'>
		            <form className='formbuy' onSubmit={handleSubmit}>
                  <p>Покупка</p>
						   <label>
	                     <input 
		                     value={inputbuy} 
	                        onChange={handleChange}
	                        type='number'/>
						   </label>
	                  <select onChange={calculateResultBuy}>
		               <option value=''>Выберите валюту</option>
		               <option value={buyusd}>USD</option>
		               <option value={buyeur}>EUR</option>
		               <option value={buyrub}>RUB</option>
	                  </select>
	                  <div className='resultbuy'>
	                     <img src={arrows}/>
		                  {resultbuy} грн</div>
	               </form>
                  <form className='formsale' onSubmit={handleSubmit}>
	               <p>Продажа</p>
						   <label>
	                     <input 
		                     value={inputsale} 
	                        onChange={handleChange2}
	                        type='number'/>
						   </label>
	                  <select onChange={calculateResultSale}>
		               <option value=''>Выберите валюту</option>
		               <option value={saleusd}>USD</option>
		               <option value={saleeur}>EUR</option>
		               <option value={salerub}>RUB</option>
	                  </select>
	                  <div className='resultsale'>
	                     <img src={arrows}/>
		                  {resultsale} грн</div>
	               </form>
	            </div>
	         </div>
	      </div>
      </div>
   )	
}

export default Currencyconverter;