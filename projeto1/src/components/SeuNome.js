const SeuNome = ({ setNome }) => {
    return (
        <>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    placeholder="Digite seu nome:"
                    onChange={(e) => {
                        setNome(e.target.value)
                    }}
                />
            </div>
        </>
    );
}

export default SeuNome;