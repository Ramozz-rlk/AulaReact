import { useState } from "react";

export default function Exercicio2() {
  const[numero, setNumero] = useState(0);
  const[resultado, setResultado] = useState();

  function calcualar()
{
let Fahrenheit = (Number(numero) - 32) * 5 / 9;

setResultado("A temperatura em celsus é: " Fahrenheit );
}

function limpar()
  {

  }
  return (
    <div>
      <h1>Exercicio 2</h1>


      <div className="conteudo">

    
        <from>

          <p>
            Digite a temperatura em graus Fahrenheit: <br />
            <input type="text" />
          </p>

        
          <p>
            <input type="button" value="Calcular" />
          </p>

          <p>
            <a href="/">Voltar</a>
          </p>

        </from>
      </div>
    </div >
  );
}
