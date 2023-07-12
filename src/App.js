import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState([])
  const [result, setResult] = useState(0);

  function onHandleChange(e){
    e.preventDefault()
    setInput([e.target.value])
  }

  function validate(numeros){
  let orderNumber = numeros.slice().sort((a, b) => a - b);
  var numeroFaltante = 0;

  for (var i = 0; i < orderNumber.length - 1; i++) {
    if (orderNumber[i + 1] - orderNumber[i] !== 1) {
      numeroFaltante = orderNumber[i] + 1;
    }
  }

  return numeroFaltante;

  }

  function onHandleSubmit(e){
    e.preventDefault()
    let numeros = input[0]?.split(',').map(Number);
    setInput([])
    setResult(validate(numeros))
  } 

  console.log('validando ando', input)
  return ( 
    <main className='container-program'>
      <form onSubmit={onHandleSubmit}>

        <label htmlFor='value' >Registro de Numeros: </label>
        <div className='container-input'>
          <input
            type='text'
            id='value'
            name='value'
            placeholder='ingrese los valores'
            value={input}
            onChange={onHandleChange}
          />
          <button type='submit'>Encontrar</button>
        </div>
      </form>
        <label>Resultado: {result}</label>
    </main>
  ); 
} 
 
export default App;