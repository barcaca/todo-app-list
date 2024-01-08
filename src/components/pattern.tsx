// Função padrão para exportar o componente Pattern
export default function Pattern() {
  return (
    // div principal com gradiente, padrão e posicionamento
    <div className="fixed -z-10 h-full w-full bg-gradient-to-b from-cyan-600 from-40% via-red-200 via-70% to-amber-500 bg-cover opacity-80 dark:from-black dark:from-40% dark:via-slate-950 dark:via-70% dark:to-cyan-950">
      {/* div interna para aplicar o padrão SVG */}
      <div className="h-full w-full bg-[url('/pattern.svg')] bg-center bg-repeat"></div>
    </div>
  )
}
