import { ClipboardText } from 'phosphor-react';
import { TaskHeader } from './TaskHeader';
import { TaskList } from './TaskList';
import styles from './Tasks.module.css'

interface TasksProps {
    key: string;
    title: string;
    isCompleted: boolean;
    allTasks: number;
    currentConcludedTasks: number;
    taskTable: Array<any>;
    isEmpty: boolean;
    deleteTask: (id: string) => void;
    CompleteTask: (taskTable:Array<any>, id: string) => void;
}
export function Tasks({ allTasks, currentConcludedTasks, taskTable, isEmpty, deleteTask, CompleteTask }: TasksProps) {

    if (isEmpty) {
        return(
            <div className={styles.task}>
                <TaskHeader 
                    doneTasks={0}
                    allTasks={0}
                />
                <div className={ styles.empty}>
                    <ClipboardText size={56} />
                    <p>
                        <b>Você ainda não tem tarefas cadastradas</b><br/>
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div>
            </div>
        );
    }else{
        return(
            <div className={styles.task}>
                <TaskHeader 
                    doneTasks={currentConcludedTasks}
                    allTasks={allTasks}
                />
                <div className={styles.tasksBox}>
                    {taskTable.map( tasks => {
                        return (
                            <TaskList 
                            key={tasks.id}
                            task={tasks.title}
                            isCompleted={tasks.isCompleted}
                            taskTable={taskTable}
                            id={tasks.id}
                            onDeleteTask={deleteTask}
                            CompleteTask={CompleteTask}
                            />  
                        );
                    })}
                </div>
            </div>
        );
    }
}