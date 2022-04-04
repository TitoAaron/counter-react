import './App.css';
import './'
import { useState } from 'react';

function App() {
  const [valor, setContador] = useState(0);
  const [valorColor, setContadorColor] = useState('black');

  function updateValue (value){
    let valorFinal;
    if(value == '-1'){
      valorFinal = valor + +value;
       setContador(valorFinal);
       colorNumber(valorFinal);
    }
    valorFinal = valor - -value;
    setContador(valorFinal);
    colorNumber(valorFinal);
  }

  function colorNumber(valor){
    if(valor > 0 ){
      setContadorColor('green');
    }else if(valor == 0) {
      setContadorColor('black');
    }else{
      setContadorColor('red');
    }
  }

  function CounterBox() {
    // TODO: Devuelveme el JSX esperado
    return <div className="container"   >
          <div className="row max-height align-items-center">
            <div className="col-10 mx-auto col-md-6 text-center main-container p-5">
              <h1 className="text-uppercase">counter</h1>
              <h1 id="counter" style={{ 'color': valorColor}}> {valor} </h1>
            <div className="btn-container d-flex justify-content-around flex-wrap">
             <Button updateValue={updateValue}value="-1"texto='Restar'/>
            <Button updateValue={updateValue} value="1" texto='Sumar'/>
      </div>
     </div>
    </div>
   </div>
  }
  
  function Button(props) {

    // TODO: Devuelveme un botón configurado según los requisitos
    return <button  onClick={() => {props.updateValue(props.value)}} className="btn counterBtn nextBtn text-uppercase m-2" >{props.texto}</button>
  }

  return (
    <div className="App">
      <CounterBox/>
    </div>
  );
}




export default App;
