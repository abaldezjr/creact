import Pessoa from "./Pessoa";

function HelloWorld() {
    return (
        <div>
            <h1>Meu primeiro componente.</h1>
            <Pessoa
                nome="Alexandre"
                idade="34"
                profissao="programador"
                foto="https://via.placeholder.com/150"
            />
        </div>
    );
}

export default HelloWorld;