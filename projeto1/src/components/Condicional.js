import { useState } from "react";

const Condicional = () => {

    function enviarEmail(e) {
        e.preventDefault();

        setUserEmail(email);
        console.log(`testando ${email}`);
    }

    function limparEmail() {
        setUserEmail('');
    }
    
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    return (
        <>
            <div>
                <h2>Cadastre seu email:</h2>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="text" 
                        placeholder="Digite seu email" 
                        name="email" 
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <button type="submit" onClick={enviarEmail}>Enviar email</button>
                    {userEmail &&
                        <div>
                            <p>O email do usuario é {userEmail}</p>
                            <button type="submit" onClick={limparEmail}>Limpar email</button>
                        </div> 
                    
                    }
                </form>
            </div>
        </>
    );
}

export default Condicional;