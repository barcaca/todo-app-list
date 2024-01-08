'use client'
import { useState } from 'react'
import ListHeader from './list-header'
import ListSection from './list-section'

export default function ListRoot() {
  // Gerencia o status da lista (filtro de tarefas)
  const [status, setStatus] = useState('All') // Inicializa com o status "All"

  return (
    <div className="flex flex-col gap-5">
      {/* Componente do cabeçalho da lista para filtrar por status */}
      <ListHeader status={status} onClick={setStatus} />
      {/* Seção de tarefas filtradas pelo status */}
      <ListSection status={status} />
    </div>
  )
}
