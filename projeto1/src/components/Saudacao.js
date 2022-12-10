const Saudacao = ({ nome }) => {

    function gerarSaudacao(nome) {
        return (`Saudação a ${nome}`);
    }

    return (
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    );
}

export default Saudacao;