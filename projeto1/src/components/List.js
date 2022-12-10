import Item from "./Item";

const List = (props) => {
    return (
        <>
            <h1>Minha lista:</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2000} />
                <Item marca="Fiat" ano_lancamento={1988} />
            </ul>
        </>
    );
}

export default List;