import { TaskItem, useTask } from '@/contexts/home-context'
import { Reorder } from 'framer-motion'
import { toast } from 'react-hot-toast'
import Button from '../button'
import { CrossIcon } from '../icons'

// Define a interface para as propriedades do componente
interface TaskItemProps {
  task: TaskItem // Tipo da tarefa (assumindo que está definido em outro arquivo)
}

// Componente TaskItem para renderizar uma única tarefa
export function TaskItem({ task }: TaskItemProps) {
  // Obtém as tarefas e a função para atualizá-las do contexto home-context
  const { tasks, setTasks } = useTask()

  // Função para remover a tarefa
  const handleRemove = (id: string) => {
    // Filtra as tarefas para remover a tarefa com o ID especificado
    const fTasks = tasks.filter((t) => t.id !== id)
    // Atualiza as tarefas no localStorage e no contexto
    localStorage.setItem('tasks', JSON.stringify(fTasks))
    setTasks(fTasks)
    // Exibe um toast para indicar a remoção
    toast('Task Removed', { icon: '🔴' })
  }
  // Função para marcar a tarefa como concluída ou reativá-la
  const handleToggle = (id: string) => {
    // Cria uma nova lista de tarefas com o status atualizado
    const updatedTasks = tasks.map((t) =>
      t.id === id
        ? {
            ...t,
            status:
              t.status === 'All' || t.status === 'Active'
                ? 'Completed'
                : 'Active',
          }
        : t,
    )

    // Atualiza as tarefas no localStorage e no contexto
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    setTasks(updatedTasks)

    const originalStatus = tasks.find((t) => t.id === id)?.status
    // Exibe um toast com base no status original da tarefa
    if (originalStatus === 'All' || originalStatus === 'Active') {
      toast('Task Completed', { icon: '🟢' })
    } else {
      toast('Task Reactivated', { icon: '🟡' })
    }
  }

  return (
    <Reorder.Item
      key={task.id}
      value={task}
      className="relative flex min-w-60 max-w-[500px] gap-4 bg-transparent px-4 py-2.5 text-base text-black shadow-md outline-none sm:text-[0.8125rem]/6 dark:text-white"
    >
      {/* Botão de conclusão/reativação */}
      <Button
        type="button"
        title="Complete Button"
        className={`h-6 w-6 rounded-full ring-1 ring-white/85 dark:ring-white/15 ${
          task.status === 'Completed' ? 'bg-emerald-500 ring-emerald-800' : ''
        }`}
        onClick={() => handleToggle(task.id)}
      />
      {/* Nome da tarefa */}
      <span className="flex-1 text-lg">{task.name}</span>
      {/* Botão de remoção */}
      <Button
        icon={CrossIcon}
        type="button"
        title="Delete Button "
        className=""
        onClick={() => handleRemove(task.id)}
      />
      {/* Elemento decorativo para efeito de anel ao focar */}
      <div className="bg-white/2.5 absolute inset-0 -z-10 rounded-lg ring-1  ring-white/85 transition dark:ring-sky-300 dark:ring-white/15" />
    </Reorder.Item>
  )
}
