import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

const NewProject = () => {

    const navigate = useNavigate();

    const createPost = (project) => {
        project.cost = 0;
        project.services = [];
        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } }))
            .catch((erro) => console.log(erro));
    }

    return (<>
        <section className={styles.newprojectContainer}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços.</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
        </section>
    </>);
}


export default NewProject;