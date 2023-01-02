import styles from './Home.module.css';
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';


const Home = () => {
    return (<>
        <section className={styles.homeContainer}>
            <h1>Bem vindo ao  <span>Baldez Jr Projetos</span></h1>
            <p>Comece a gerenciar seus projetos.</p>
            <LinkButton to="/newproject" text="Criar projeto"/>
            <br/>
            <img src={savings} alt="baldezjr" />
        </section>
    </>);
}

export default Home;