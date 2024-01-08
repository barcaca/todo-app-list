'use client'

import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

// Define a estrutura de um item de tarefa
export interface TaskItem {
  id: string // Identificador único da tarefa
  name: string // Nome ou descrição da tarefa
  status: string // Status da tarefa (por exemplo, "pendente", "concluída")
}
// Define o formato do valor do contexto
interface TaskItemType {
  tasks: TaskItem[] // Array de itens de tarefa
  setTasks: Dispatch<React.SetStateAction<TaskItem[]>> // Função para atualizar o array de tarefas
}
// Cria um contexto para gerenciar dados de tarefas
const HomeContext = createContext({} as TaskItemType)

// Componente Provider para disponibilizar dados de tarefas para componentes filhos
export function HomeProvider({ children }: { children: ReactNode }) {
  // Estado para armazenar as tarefas
  const [tasksItem, setTasks] = useState<TaskItem[]>([])

  // Efeito para carregar as tarefas salvas no armazenamento local ao iniciar a aplicação
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  // Retorna o contexto com as tarefas e a função para atualizá-las
  return (
    <HomeContext.Provider value={{ tasks: tasksItem, setTasks }}>
      {children}
    </HomeContext.Provider>
  )
}

// Hook para acessar dados e funções de tarefas de qualquer lugar na árvore de componentes
export const useTask = () => useContext(HomeContext)
