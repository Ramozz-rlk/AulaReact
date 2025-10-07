import { useState } from "react";
export default function Exercicio3() {
  const[valor, setValor] = useState(0);
  const[taxa, setTaxa] = useState(0);
  const[tempo, setTempo] = useState(0);
  const[resultado, setResultado] = useState();



  function calcualar()
{
let parcela =valor +(valor*(taxa*taxa/100) * tempo)
setResultado("O valor da parcela é " + parcela);
}

function limpar()
  {

  }


  return (
    <div>
      <h1>Exercicio 3</h1>


      <div className="conteudo">

    
        <from>


        <p>
        Digite o valor da prestação:  <br />
            <input type="text" value={valor}
            onChange={ (e) => setValor(e.target.value)}/>
          </p>

          <p>
          Digite a taxa de juros: <br />
            <input type="text" value={taxa}
            onChange={ (e) => setTaxa(e.target.value)}/>
          </p>

          <p>
          Digite o tempo (em dias) de atraso: <br />
            <input type="text" value={tempo}
            onChange={ (e) => setTempo(e.target.value)}/>
          </p>

      

          <p>
            <input type="button" value="Calcular" onClick={calcualar} />
          </p>

          <p>
            <a href="/">Voltar</a>
          </p>


          <p>
              Resultado= {resultado} <br />
              <br />
              {resultado}

            </p>
        </from>
      </div>
    </div >
  );
}
