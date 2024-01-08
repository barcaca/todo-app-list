import { useTask } from '@/contexts/home-context'
import { Reorder } from 'framer-motion'
import { TaskItem } from './task-item'

// Define the Task type based on the expected structure of a task
interface ListSectionProp {
  status: string
}

export default function ListSection({ status }: ListSectionProp) {
  // Obtém as tarefas e a função para atualizá-las do contexto home-context
  const { tasks, setTasks } = useTask()

  // Função para tratar a reordenação das tarefas
  const handleReorder = (newOrder: typeof tasks) => {
    // Atualiza as tarefas com a nova ordem no contexto
    setTasks(newOrder)
    // Salva a nova ordem no localStorage para persistência
    localStorage.setItem('tasks', JSON.stringify(newOrder))
  }

  return (
    // Utiliza o componente Reorder.Group do Framer Motion para permitir reordenação
    <Reorder.Group
      axis="y"
      values={tasks} // Lista de tarefas a serem reordenadas
      onReorder={handleReorder}
      className="mx-auto grid gap-4 "
    >
      {/* Filtra as tarefas de acordo com o status atual */}
      {tasks
        .filter((task) => {
          if (status === 'All') {
            return true // Exibe todas as tarefas
          } else if (status === 'Active') {
            return task.status !== 'Completed' // Exibe apenas tarefas não concluídas
          } else {
            return task.status === 'Completed' // Exibe apenas tarefas concluídas
          }
        })
        .map((task) => (
          // Renderiza um componente TaskItem para cada tarefa filtrada
          <TaskItem key={task.id} task={task} />
        ))}
    </Reorder.Group>
  )
}
