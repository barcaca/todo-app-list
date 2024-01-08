import Link from 'next/link'

// Componente de rodapé introdutório
export function IntroFooter() {
  return (
    <footer className="mt-4 flex justify-center gap-x-2 text-[0.8125rem]/6 text-gray-700">
      {/* Texto informativo */}
      Code by{' '}
      <Link
        href="https://github.com/Barcaca"
        className="transition-color font-medium text-black hover:text-sky-500 dark:text-sky-300"
      >
        {/* Link to the developer's homepage */}
        Luan Barcaça
      </Link>
    </footer>
  )
}
