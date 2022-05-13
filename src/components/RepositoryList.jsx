import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const repository = {
    name: 'NEW FOLDER',
    description: 'description ...',
    link: 'https://github.com/dscostat7'

}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/dscostat7/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h2>List of repositories</h2>

            <ul>
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}