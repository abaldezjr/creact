import styles from './Pessoa.module.css';

const Pessoa = ({nome, foto, idade, profissao}) => {
    return(
        <div className={styles.pessoa}>
            <img src={foto} alt={nome}></img>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    );
}

export default Pessoa;