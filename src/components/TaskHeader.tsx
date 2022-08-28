import styles from './TaskHeader.module.css'

interface TaskHeaderProps {
    doneTasks:number;
    allTasks: number
}

export function TaskHeader({ doneTasks, allTasks}: TaskHeaderProps) {

    return(
        <header className={styles.header}>
            <div className={styles.created}>
                <span className={styles.taskscreated}>Tarefas criadas</span>
                <span className={styles.counter}>{allTasks}</span>
            </div>
            <div className={styles.done}>
                <span className={styles.concluded}>Concluidas</span>
                <span className={styles.counter}>{doneTasks} de {allTasks}</span>
            </div>
        </header>
    );
}