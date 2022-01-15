import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import Currencyconverter from '../components/Currencyconverter';


const Currencyrate = () => {
   const [buyusd, setBuyusd] = useState('');
   const [saleusd, setSaleusd] = useState('');
   const [buyeur, setBuyeur] = useState('');
   const [saleeur, setSaleeur] = useState('');
   const [buyrub, setBuyrub] = useState('');
   const [salerub, setSalerub] = useState('');

   async function fetchCurrencyrate () {
      const responce = await axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
      setBuyusd(Number(responce.data[0].buy).toFixed(2));
      setSaleusd(Number(responce.data[0].sale).toFixed(2));
      setBuyeur(Number(responce.data[1].buy).toFixed(2));
      setSaleeur(Number(responce.data[1].sale).toFixed(2));
      setBuyrub(Number(responce.data[2].buy).toFixed(2));
      setSalerub(Number(responce.data[2].sale).toFixed(2));
   }

   fetchCurrencyrate();

   return(
      <div>
         <div className='container'>
            <div className='currencyrate'>
	       <h1>Курс валют</h1>
	       <div className='currencyrate-titles'>
	          <div><p>Валюта</p></div>
	          <div><p>Количество</p></div>
	          <div><p>Покупка</p></div>
	          <div><p>Продажа</p></div>
               </div>
	       <div className='currencyrate-usd'>
	           <div><p>Доллар(USD)</p></div>
	           <div><p>1</p></div>
	           <div><span>{buyusd}</span></div>
	           <div><span>{saleusd}</span></div>
	        </div>
	        <div className='currencyrate-eur'>
	           <div><p>Евро(EUR)</p></div>
	           <div><p>1</p></div>
	           <div><span>{buyeur}</span></div>
	           <div><span>{saleeur}</span></div>
	        </div>
	        <div className='currencyrate-rub'>
	           <div><p>Рубль(RUB)</p></div>
	           <div><p>10</p></div>
	           <div><span>{buyrub}</span></div>
	           <div><span>{salerub}</span></div>
	        </div>
             </div>
	     <Currencyconverter 
	        buyusd={buyusd} 
	        buyeur={buyeur} 
	        buyrub={buyrub} 
	        saleusd={saleusd} 
	        saleeur={saleeur} 
	        salerub={salerub}
             />
         </div>
      </div>
   ) 
}

export default Currencyrate;
