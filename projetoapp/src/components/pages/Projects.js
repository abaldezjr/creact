import styles from './Projects.module.css';

import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Container from '../layout/Container';
import Loading from '../layout/Loading';
import LinkButton from '../layout/LinkButton';
import Message from "../layout/Message";
import ProjectCard from '../project/ProjectCard';


const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState('');

    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        fetch("http://localhost:5000/projects", {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProjects(data);
                setRemoveLoading(true);
            }).catch((erro) => console.log(erro))
    }, []);

    const removeProject = (id) => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },

        }).then(resp => resp.json())
            .then(() => {
                setProjects(projects.filter((project) => project.id !== id));
                setProjectMessage('Projeto removido com sucesso.');
            })
            .catch(erro => console.log(erro));
    }

    return (<>
        <div className={styles.projectContainer}>
            <div className={styles.titleContainer}>
                <h1>Meus projetos</h1>
                <LinkButton to="/newproject" text="Novo projeto" />
            </div>
            {message && <Message text={message} type="success" />}
            {projectMessage && <Message text={projectMessage} type="success" />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            id={project.id}
                            budget={project.budget}
                            category={project.category.name}
                            name={project.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />))
                }
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 &&
                    <p>Não há projetos cadastrados</p>
                }
            </Container>
        </div>
    </>);
}

export default Projects;