import "./App.css";
export default function App()

{
    const centralizado = {textAlingn : "center"};

    const destaque = {
        textAlign : "center",
        border : "2px solid magenta",
        padding: "10px"
    }

    return (
        <div>
            <h1>Estudo CSS</h1>

            <p>
                O CSS (<i>Cacasding Style Sheets</i>)
                utilizada para estilizar <b>página web</b>, e sera utilizada dentro ou fora do HTML.
            </p>

            <p>
                Na aula de hoje, vamos estudar e entender como aplicar estilos CSS em componentes do React.
            </p>
            
            <p>
                Utilizando o CSS podemos definir:
            </p>

            <ul>
                <li>Definir cor para texto, para o fundo do elemento</li>
                <li>Posicionamento dos elementos na página</li>
                <li>Espaçcamento, bordas, sombras, etc...</li>
                <li>Efeito visuais e animações.</li>
            </ul>

            <p>
                O HTML diz o que deve aparecer na página, enquanto o CSS diz como deve aparecer.
            </p>
<p className="centro">
    Cidade de Tapiratiba 
</p>

<p style={centralizado}>
    <img src="tapira.jpg" alt=""/>
</p>
<h3 style={destaque}>Fim de aula</h3>

        </div>
    );
}