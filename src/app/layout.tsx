import './globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import Link from 'next/link'

const roboto = Ubuntu({
  weight: '500',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfólio - Equipe Otaku',
  description: 'Projeto feito para um trabalho de Ética.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="bg-gradient-66">
      <body className={roboto.className}>
        <main className="flex flex-col items-center justify-between">
          <header className="flex justify-between items-center w-full h-22 p-16 fixed">
            <h1 className="font-black text-4xl leading-3 text-primary-green tracking-tighter">
              <Link href="/">Otaku Team</Link>
            </h1>
            <section>
              <nav>
                <ul className="flex space-x-5 text-primary-purple">
                  <li>
                    <Link href="/Sobre">Sobre</Link>
                  </li>
                  <li>
                    <Link href="/Equipe">Equipe</Link>
                  </li>
                </ul>
              </nav>
            </section>
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}
