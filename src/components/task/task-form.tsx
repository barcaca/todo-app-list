'use client'
import { useTask } from '@/contexts/home-context'
import { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { v4 } from 'uuid'
import Button from '../button'
import { CrossIcon } from '../icons'
import TaskInput from './task-input'

// Função TaskForm para criar um formulário de adição de tarefas
export function TaskForm() {
  // Obtém a função setTasks do contexto home-context para atualizar as tarefas
  const { setTasks } = useTask()
  // Gerencia o valor de entrada da tarefa
  const [inputValue, setInputValue] = useState<string>('')

  // Trata o envio do formulário
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault() // Previne o comportamento padrão de envio do formulário
    handleAddTask() // Chama a função para adicionar a tarefa
    setInputValue('') // Limpa o campo de entrada após a criação da tarefa
  }

  // Função para adicionar uma nova tarefa
  const handleAddTask = () => {
    // Valida o comprimento da tarefa
    if (inputValue.length < 3) {
      toast.error('A task must have more than 3 characters')
      return // Sai da função se a tarefa for muito curta
    }

    if (inputValue.length > 100) {
      toast.error('A task must not be more than 100 characters')
      return // Sai da função se a tarefa for muito longa
    }

    // Atualiza a lista de tarefas no contexto
    setTasks((prevTasks) => {
      // Cria um novo objeto de tarefa
      const newTask = { id: v4(), name: inputValue, status: 'All' }
      const newList = [...prevTasks, newTask] // Adiciona a nova tarefa à lista existente
      localStorage.setItem('tasks', JSON.stringify(newList)) // Salva a lista atualizada no localStorage
      return newList
    })
    // Exibe uma notificação de sucesso
    toast.success('Task Created')
  }
  // Retorna o componente formulário
  return (
    <form
      onSubmit={handleSubmit}
      className="relative isolate mt-8 flex items-center px-2 shadow-md dark:shadow-md"
    >
      {/* Botão de conclusão (não funcional) */}
      <Button
        type="button"
        title="Complete Button"
        className="h-6 w-6 rounded-full ring-1 ring-white/85 dark:ring-white/15"
        disabled
      />
      {/* Entrada de tarefa */}
      <TaskInput inputValue={inputValue} setInputValue={setInputValue} />
      {/* Botão para adicionar tarefa */}
      <Button
        icon={CrossIcon}
        type="submit"
        title="Add Button"
        className="rotate-45"
      />
      {/* Efeitos visuais para destacar o formulário */}
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4  peer-focus:ring-amber-300/15 peer-focus:dark:ring-sky-300/15" />
      <div className="bg-white/2.5 absolute inset-0 -z-10 rounded-lg ring-1 ring-white/85 transition peer-focus:ring-amber-300 dark:ring-white/15 peer-focus:dark:ring-sky-300" />
      {/* Componente de toasts para exibir mensagens */}
      <Toaster />
    </form>
  )
}
