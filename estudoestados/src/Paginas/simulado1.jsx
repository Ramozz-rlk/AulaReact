import { useState } from "react";
export default function Simulado1() {
  const[km, setKm] = useState(0);
  const[dias, setDias] = useState(0);
  const[resultado, setResultado] = useState();

function calcualar()
{
    let resultado = (dias * 90) + (km * 0.20);

setResultado("Preço total a agar: " + resultado);
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
            Km percorridos: <br />
            <input type="text" value={km}
            onChange={ (e) => setKm(e.target.value)}/>
          </p>

          <p>
            Dias alugados: <br />
            <input type="text" value={dias}
            onChange={ (e) => setDias(e.target.value)}/>
          </p>

          

          <p>

            <p>
             <b>Resuldado</b> <br/>
             O numero digitado foi {km} <br/>
             O numero digitado foi {dias} <br/>

             Resultado: {resultado}

            </p>
            <input type="button" value="Calcular" onClick={calcualar}/>
          </p>
        </from>
      </div>
    </div >
  );
}
