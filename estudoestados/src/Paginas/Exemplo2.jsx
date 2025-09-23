import { useState } from "react";
export default function Exemplo2() {
  const[nota1, setNota1] = useState(22);
  const[nota2, setNota2] = useState(5);
  const[nota3, setNota3] = useState(5);
  const[resultado, setResultado] = useState();  
    function media()
{
let n1, n2, n3, media;
n1 = Number(nota1);
n2 = Number(nota2);
n3 = Number(nota3);


media = (n1 + n2 + n3)/3;

setResultado("a media é: " + media)
}

function limpar()
  {

  }

  return (
    <div>
      <h1>Exemplo 2</h1>

      <div className="conteudo">

        <h3>Calculo da media Aritimetica</h3>

        <p>O objetivo sera receber o nome do aluno, suas 3 notas e calcular a media</p>

 <from>

          <p>
            Nome do Aluno: <br />
            <input type="text" />
          </p>

           <p>
            Nota 1: <br />
            <input type="text" value={nota1}
            onChange={ (e) => setNota1(e.target.value)}/>    
            </p>

           <p>
            Nota 2: <br />
            <input type="text" value={nota2}
            onChange={ (e) => setNota2(e.target.value)}/>   
          </p>

          <p>
            Nota 3: <br />
            <input type="text" value={nota3}
            onChange={ (e) => setNota3(e.target.value)}/>   
          </p>


          <p>
              nota1= {nota1} <br />
              nota2= {nota2} <br />
              nota3= {nota3} <br />

              {resultado}

            </p>
            <p>
            <input type="button" value="Calcular" onClick={media}/>
          </p>


 </from>
      </div>
    </div>
  );
}
