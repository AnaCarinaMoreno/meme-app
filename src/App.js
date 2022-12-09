import React, { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {
   const  [frase1, setFrase1] = useState('');
   const  [frase2, setFrase2] = useState('');
   const  [imagen, setImagen] = useState('');

   const onChangeFrase1 = function (evento){

    setFrase1(evento.target.value)
   }

   const onChangeFrase2 = function(evento){
    setFrase2(evento.target.value)
   }

   const onChangeImagen = function(evento){
    setImagen(evento.target.value)
   }

   const onClickExportar = function(evento){
    alert("EXPORTAR")
    html2canvas(document.querySelector("#meme")).then(canvas => {  
      var img    = canvas.toDataURL("image/png");
      
     var link = document.createElement('a');
     link.download = 'meme';
     link.href = img ;
     link.click(); 
  });
  
   }
  return (
    <div className="App">
     
     
      <select onChange={onChangeImagen}>
         <option value="incendio">Casa en llamas</option>
         <option value = "bebe">Bebe</option>
         <option value = "futurama">Futurama</option>
         <option value = "don-ramon">Don-Ramon</option>
         <option value = "gollum">Gollum</option>
        
      </select> <br/>
    
      <input onChange = {onChangeFrase1} type = "text"  placeholder = "Escriba la primera frase" /> <br/>
      <input onChange = {onChangeFrase2} type = "text"  placeholder = "Escriba la segunda frase"/>  <br/>
      <button className='export' onClick = {onClickExportar} >Exportar</button>
      <br/>
      <div id='meme'>
        <span className='frase-uno'>{frase1}</span><br/>
        <span className='frase-dos'>{frase2}</span>
        <img className = "img-meme" src = {"/img/"+imagen+".jpg"}  alt='futu'/>
      </div>

          
    </div>
  );
}

export default App;
