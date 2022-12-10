const List2 = ({ itens }) => {
    return (
        <>
            <h3>Lista:</h3>
            { (itens.length > 0) ? 
                (itens.map((item, index) => (<p key={index}>{item}</p>))):
                (<p>Nenhum item na lista.</p>)
            }
        </>
    );
}

export default List2;