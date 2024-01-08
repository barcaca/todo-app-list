import { useTask } from '@/contexts/home-context'
import React from 'react'
import toast from 'react-hot-toast'
import Button from '../button'

interface ListHeaderProps {
  status: string // Status atual da lista
  onClick: (newStatus: string) => void // Função para tratar cliques nos botões de status
}
// Componente ListHeader para renderizar um cabeçalho com botões de status
const ListHeader: React.FC<ListHeaderProps> = ({ status, onClick }) => {
  const { tasks, setTasks } = useTask()
  // Define os status possíveis
  const statuses = ['All', 'Active', 'Completed']

  const handleClearCompleted = () => {
    const updatedTasks = tasks.filter((task) => task.status !== 'Completed')

    // Atualiza as tarefas no local storage ou contexto
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    setTasks(updatedTasks)

    // Exibe um toast para indicar a remoção das tarefas concluídas
    toast('Completed Tasks Removed', { icon: '🔴' })
  }
  return (
    <div className="relative mx-auto flex  items-center shadow-md dark:shadow-md">
      {/* Itera sobre os status disponíveis e renderiza um botão para cada um */}
      {statuses.map((statusItem, index) => (
        <Button
          key={index} // Chave única para identificação do botão
          onClick={() => onClick(statusItem)} // Dispara a função onClick ao clicar no botão
          className={`px-3 py-3 text-lg hover:text-amber-300 md:w-32 md:px-6 hover:dark:text-white ${
            status === statusItem
              ? 'text-white dark:text-sky-500 '
              : 'text-black dark:text-gray-500'
          }`}
        >
          {/* Texto do botão (nome do status) */}
          {statusItem}
        </Button>
      ))}
      {/*  botão para remover todas tarefas */}
      <Button
        onClick={() => handleClearCompleted()} // Dispara a função onClick ao clicar no botão
        className={
          'px-3 py-3 text-lg hover:text-amber-300 md:w-32 md:px-6 hover:dark:text-white '
        }
      >
        {/* Texto do botão (nome do status) */}
        Clear
      </Button>
      {/* Fundo animado ao focar */}
      <div className="bg-white/2.5 absolute inset-0 -z-10 rounded-lg ring-1 ring-white/85 transition peer-focus:ring-amber-300 dark:ring-white/15 peer-focus:dark:ring-sky-300" />
    </div>
  )
}

export default ListHeader
