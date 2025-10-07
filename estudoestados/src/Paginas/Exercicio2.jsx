import { useState } from "react";

export default function Exercicio2() {
  const [numero, setNumero] = useState(0);
  const [resultado, setResultado] = useState();

  function calcular() {
    let Fahrenheit = (Number(numero) - 32) * 5 / 9;
    setResultado("A temperatura em celsius é: " + Fahrenheit);
  }

  function limpar() {

  }

  return (
    <div>
      <h1>Exercicio 2</h1>

      <div className="conteudo">
        <form>
          <p>
            Digite a temperatura em graus Fahrenheit: <br />
            <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
          </p>

          <p>
            <input type="button" value="Calcular" onClick={calcular} />
          </p>

          <p>
            <a href="/">Voltar</a>
          </p>
        </form>

        <p>
             <b>Resuldado</b> <br/>
               {resultado} <br/>

            </p>
      </div>
    </div>
  );
}
