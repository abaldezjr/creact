import { useState } from "react";

const Form = (props) => {

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(name);
        console.log(password);
        console.log('Usuario Cadastrado.');
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (
        <>
            <div>
                <h1>Meu cadastro:</h1>
                <form onSubmit={cadastrarUsuario}>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            name="nome"
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="senha">Senha:</label>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            name="password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                    <input type="submit" value="Cadastrar" />
                </form>
            </div>
        </>
    );
}

export default Form;