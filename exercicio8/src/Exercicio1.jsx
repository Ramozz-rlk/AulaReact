export default function Exercicio1({numero})
{
    let quadrado = numero*numero;
    let cubo = numero*numero*numero;

    return (
        <div>
            <p>O quadrado do numero {numero} é {quadrado}</p>

            <p>O cubo do numero {numero} é {cubo}</p>

        </div>
    );

}