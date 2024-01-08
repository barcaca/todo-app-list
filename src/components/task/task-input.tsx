import { Dispatch } from 'react'

// Define a interface TaskInputProps para especificar as propriedades do componente
interface TaskInputProps {
  inputValue: string // Valor da entrada de tarefa
  setInputValue: Dispatch<React.SetStateAction<string>> // Função para atualizar o valor da entrada
}
// Componente TaskInput para renderizar um campo de entrada de tarefa
export default function TaskInput({
  inputValue,
  setInputValue,
}: TaskInputProps) {
  return (
    <>
      {/* Rótulo acessível para a entrada de tarefa */}
      <label className="sr-only">Create a new todo...</label>
      {/* Campo de entrada de texto */}
      <input
        value={inputValue} // Define o valor atual da entrada
        onChange={(e) => setInputValue(e.target.value)} // Dispara a função setInputValue para atualizar o estado
        required // Indica que a entrada é obrigatória
        type="text" // Define o tipo de entrada como texto
        name="text" // Define o nome da entrada (para envio de formulários)
        placeholder={'Create a new todo...'}
        className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-300 focus:outline-none sm:text-[0.8125rem]/6 placeholder:dark:text-gray-500 "
      />
    </>
  )
}
