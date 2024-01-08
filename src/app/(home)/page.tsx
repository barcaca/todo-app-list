import { IntroFooter } from '@/components/footer'
import { IntroHeader } from '@/components/header'
import ListRoot from '@/components/task/list-root'
import { TaskForm } from '@/components/task/task-form'

// Página principal
export default function Home() {
  return (
    <div className="my-auto flex h-full flex-col lg:grid lg:grid-cols-2">
      {/* Seção esquerda (Formulário e Rodapé) */}
      <div className="mx-auto flex max-w-lg flex-col p-6 md:items-center md:justify-center">
        {/* Cabeçalho da introdução com formulário de tarefa */}
        <IntroHeader>
          <TaskForm />
        </IntroHeader>
        {/* Rodapé da introdução */}
        <IntroFooter />
      </div>
      {/* Seção direita (Lista de Tarefas) */}
      <div>
        <main className="mx-auto mt-10 flex max-w-lg items-center justify-center p-6">
          {/* Componente raiz da lista de tarefas */}
          <ListRoot />
        </main>
      </div>
    </div>
  )
}
