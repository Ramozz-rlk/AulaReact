import { useState } from "react";
export default function Exemplo1() {
  const[numero1, setNumero1] = useState(22);
  const[numero2, setNumero2] = useState(5);
  const[resultado, setResultado] = useState();

function somar()
{
let n1, n2, soma;
n1 = Number(numero1);
n2 = Number(numero2);
soma = n1 + n2;

setResultado("a soma é: " + soma)
}

function limpar()
  {

  }

  return (
    <div>
      <h1>Exemplo 1</h1>


      <div className="conteudo">

        <h3>Exemplo do useState</h3>

        <p>
          O objetivo aqui sera receber dois numeros, soma-los, e exibir o resultado.
        </p>

        <from>

          <p>
            Digite o primeiro numero <br />
            <input type="text" value={numero1}
            onChange={ (e) => setNumero1(e.target.value)}/>
          </p>

          <p>
            Digite o segundo numero <br />
            <input type="text" value={numero2}
            onChange={ (e) => setNumero2(e.target.value)}/>

          </p>

          <p>

            <p>
              Numero1= {numero1} <br />
              Numero2= {numero2} <br />
              {resultado}

            </p>
            <input type="button" value="Calcular" onClick={somar}/>
          </p>
        </from>
      </div>
    </div >
  );
}
