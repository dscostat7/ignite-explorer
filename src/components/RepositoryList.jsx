import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'NEW FOLDER',
    description: 'description ...',
    link: 'https://github.com/dscostat7'

}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h2>List of repositories</h2>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem/>
                <RepositoryItem/>
            </ul>
        </section>
    )
}