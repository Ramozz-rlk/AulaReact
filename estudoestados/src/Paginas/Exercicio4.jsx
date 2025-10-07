import { useState } from "react";

export default function Exercicio4() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState();

  function calcular() {
    let area = (Number(valor1) * Number(valor2)) / 2;
    setResultado("A área do triângulo é: " + area);
  }

  function limpar() {
    setValor1(0);
    setValor2(0);
    setResultado(null);
  }

  return (
    <div>
      <h1>Exercicio 4</h1>

      <div className="conteudo">
        <form>
          <p>
            Digite o valor da base: <br />
            <input
              type="text"
              value={valor1}
              onChange={(e) => setValor1(e.target.value)}
            />
          </p>

          <p>
            Digite o valor da altura: <br />
            <input
              type="text"
              value={valor2}
              onChange={(e) => setValor2(e.target.value)}
            />
          </p>

          <p>
            <input type="button" value="Calcular" onClick={calcular} />
          </p>

          <p>
            {resultado && <span>{resultado}</span>}
          </p>

          <p>
            <a href="/">Voltar</a>
          </p>
        </form>
      </div>
    </div>
  );
}
