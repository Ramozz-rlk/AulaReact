import { useState } from "react";
export default function Exercicio1() {
  const[numero, setNumero] = useState(0);
  const[resultado, setResultado] = useState();

function calcualar()
{
let quadrado = Number(numero) * Number(numero);
let cubo = quadrado * Number(numero);

setResultado("O quadrado é " + quadrado + ". o cubo é" + cubo);
}

function limpar()
  {

  }

  return (
    <div>
      <h1>Exercicio 1</h1>


      <div className="conteudo">

        <h3>Exemplo do useState</h3>

        <p>
          O objetivo aqui sera receber dois numeros, soma-los, e exibir o resultado.
        </p>

        <from>

          <p>
            Digite o primeiro numero <br />
            <input type="text" value={numero}
            onChange={ (e) => setNumero(e.target.value)}/>
          </p>

          

          <p>

            <p>
             <b>Resuldado</b> <br/>
             O numero digitado foi {numero} <br/>
             Resultado: {resultado}

            </p>
            <input type="button" value="Calcular" onClick={calcualar}/>
          </p>
        </from>
      </div>
    </div >
  );
}
