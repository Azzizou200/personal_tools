import type { ReactNode } from 'react'


type ToolPageProps = {
  children: ReactNode

}

export function ToolPage({ children }: ToolPageProps) {
  return (
    <main className="page-shell tool-page ">

      {children}
    </main>
  )
}
