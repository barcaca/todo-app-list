import { ReactNode } from 'react'
import { IconLink } from './icon-link'
import { FrontEndMentorIcon, GitHubIcon } from './icons'

// Propriedades do componente IntroHeader
interface IntroHeaderProps {
  children: ReactNode
}
// Componente de cabeçalho introdutório
export function IntroHeader({ children }: IntroHeaderProps) {
  return (
    <header className="flex flex-col gap-6 font-display">
      {/* Título principal */}
      <h1 className="flex flex-col gap-4 text-4xl/tight font-bold text-white">
        <span className="">On My List</span>
        <span className="text-lg text-black md:mt-5 md:text-4xl/tight dark:text-sky-300">
          minimalist To-Do App
        </span>
      </h1>
      {/* Conteúdo filho opcional */}
      {children}
      {/* Descrição do aplicativo */}
      <p className="text-sm/6 dark:text-gray-300">
        Who needs a To-Do app, anyway? On My List is so intuitive you might just
        forget you have one. Beautiful design, effortless organization.
      </p>
      {/* Links para FrontEnd Mentor e GitHub */}
      <div className="flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink
          href={'https://www.frontendmentor.io/profile/Barcaca'}
          icon={FrontEndMentorIcon}
        >
          FrontEnd Mentor
        </IconLink>
        <IconLink
          href={'https://github.com/barcaca/todo-app-list'}
          icon={GitHubIcon}
        >
          GitHub
        </IconLink>
      </div>
    </header>
  )
}
