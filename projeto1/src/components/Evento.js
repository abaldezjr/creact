import Button from "./Button";

const Evento = ({ numero }) => {

    function meuEvento() {
        console.log(`Evento disparado ${numero}`);
    }

    function meuEvento2() {
        console.log(`Primeiro Evento disparado`);
    }

    return (
        <>
            <div>
                <h1>Clique para disparar um evento:</h1>
                <Button event={meuEvento} text="Meu botao" />
                <Button event={meuEvento2} text="Meu botao" />
                {/*<button onClick={meuEvento}>Ativar!</button>*/}
            </div>
        </>
    );
}

export default Evento;