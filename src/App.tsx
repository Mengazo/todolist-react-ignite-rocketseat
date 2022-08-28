import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import styles from './App.module.css'
import './global.css'
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App({}) {

  const [tasks, setTasks] = useState<Array<Task>>([])

  const [newTask, setNewTask] = useState('')

  const [isCompletedTask, setIsCompletedTask] = useState(false)

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: newTask,
        isCompleted: false
      }
    ])
    setNewTask('')
    console.log(tasks)
  }
  
  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    console.log(event);
    event.target.setCustomValidity('Este campo é obrigatório!')
    setNewTask(event.target.value)
  }

  if (tasks.length > 0) {
    var isEmpty = false;
  }else{
    var isEmpty = true;
  }

  function deleteTask(id: string) {
      const newTaskTable = tasks.filter(task =>{
          return task.id !== id;
      });
      console.log(newTaskTable);
      setTasks(newTaskTable);
      return newTaskTable;
  }

  function CompleteTask(taskTable: Array<Task>, id: string) {
    console.log(id)
    const newTaskTable = taskTable.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasks(newTaskTable);
    setIsCompletedTask(!isCompletedTask);
    console.log(newTaskTable)
    return newTaskTable;
  }

  if (isEmpty){
    return(
      <div >
        <Header />
          <div className={styles.list}>
              <form onSubmit={handleCreateNewTask} className={styles.navbar}>
                  <textarea 
                      name="navbar"
                      placeholder='Adicione uma nova tarefa'
                      value={newTask}
                      onChange={handleNewTaskChange}
                      onInvalid={handleNewTaskInvalid}
                      required
                  >
                  </textarea>
                  <button type="submit">
                      Criar
                      <PlusCircle size={20}/>
                  </button>
              </form>
          </div>
            <Tasks
              key={'none'}
              title={'none'}
              isCompleted={false}
              allTasks={tasks.length}
              currentConcludedTasks={tasks.filter(task => task.isCompleted).length}
              taskTable={tasks}
              isEmpty={isEmpty}
              deleteTask={deleteTask}
              CompleteTask={CompleteTask}
            />
      </div>
    );
  }else{
    return ( 
      <div>
        <Header />
        <div className={styles.div}>
              <form onSubmit={handleCreateNewTask} className={styles.navbar}>
                  <textarea 
                      name="navbar"
                      placeholder='Adicione uma nova tarefa'
                      value={newTask}
                      onChange={handleNewTaskChange}
                      onInvalid={handleNewTaskInvalid}
                      required
                  >
                  </textarea>
                  <button type="submit">
                      Criar
                      <PlusCircle size={20}/>
                  </button>
              </form>
          </div>
            {tasks.map(task =>
            <Tasks
              key={task.id}
              title={task.title}
              isCompleted={task.isCompleted}
              allTasks={tasks.length}
              currentConcludedTasks={tasks.filter(task => task.isCompleted).length}
              taskTable={tasks}
              isEmpty={isEmpty}
              deleteTask={deleteTask}
              CompleteTask={CompleteTask}
            />
            )}
      </div>
    );
  }
}

