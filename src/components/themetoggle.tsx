'use client' // Diretiva que indica que o código deve ser executado no cliente

// Importações de bibliotecas
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

// Variantes de animação para os ícones
const iconVariants = {
  // Inicial: opacidade a 0
  initial: { opacity: 0 },
  // Animado: opacidade a 1 com transição de 1 segundo
  animate: { opacity: 1, transition: { duration: 1 } },
}
// Componente para exibir o ícone do sol
function ThemeIconSun(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    // Envolve o SVG com Motion para animação
    <motion.svg
      className="h-5 w-5"
      variants={iconVariants}
      initial="initial"
      animate="animate"
    >
      <svg aria-hidden="true" viewBox="0 0 26 26" {...props}>
        <path
          fill="#FFF"
          d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
        />
      </svg>
    </motion.svg>
  )
}

// Componente para exibir o ícone da lua
function ThemeIconMoon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    // Envolve o SVG com Motion para animação
    <motion.svg
      className="h-5 w-5"
      variants={iconVariants}
      initial="initial"
      animate="animate"
    >
      <svg aria-hidden="true" viewBox="0 0 26 26" {...props}>
        <path
          fill="#FFF"
          d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
        />
      </svg>
    </motion.svg>
  )
}
// Componente para alternar entre temas
export function ThemeToggle() {
  // Estado para controlar a montagem do componente
  const [mounted, setMounted] = useState(false)
  // Obtém o tema atual e a função para alterar o tema
  const { theme, setTheme } = useTheme()
  // Determina o tema oposto ao atual
  const otherTheme = theme === 'light' ? 'dark' : 'light'

  // Efeito para definir que o componente está montado após o primeiro render
  useEffect(() => {
    setMounted(true)
  }, [])
  // Renderizar o componente somente após o primeiro render
  if (!mounted) {
    return null
  }
  // Renderizar o botão de alternância de tema
  return (
    <button
      type="button"
      className="group fixed right-3 top-4 z-50 -m-2.5 p-2.5"
      onClick={() => setTheme(otherTheme)}
    >
      <span className="sr-only transition">Switch to {otherTheme} theme</span>
      {theme === 'light' ? <ThemeIconMoon /> : <ThemeIconSun />}
    </button>
  )
}
