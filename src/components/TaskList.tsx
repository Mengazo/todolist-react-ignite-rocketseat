import { Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './TaskList.module.css'

interface TaskListProps {
    task: string;
    isCompleted: boolean;
    taskTable: Array<any>;
    id:string;
    onDeleteTask: (id: string) => void;
    CompleteTask: (taskTable:Array<any>, id: string) => void;
}

export function TaskList({ task, isCompleted, taskTable, id, onDeleteTask, CompleteTask }: TaskListProps) {

  function toggleCompleteTask() {
    CompleteTask(taskTable, id)
  }

  function handleDeleteTask(){
    onDeleteTask(id);
  }

  return(
        <div className={styles.taskBox}>
          <div className={styles.taskContent}>
              <button onClick={toggleCompleteTask} className={ isCompleted ? styles.taskChecked : styles.taskCheck}>
                
              </button>

              <p className={isCompleted ? styles.taskTextChecked : styles.taskText}>
                  {task}
              </p>

              <button onClick = {handleDeleteTask}className={styles.taskDelete}>
                <Trash size={20} />
              </button>
          </div>
    </div> 
  );
}