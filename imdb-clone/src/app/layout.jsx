import Header from '@/components/Header'
import './globals.css'
import Providers from './Providers'
import Head from './head'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/* Navibar */}

          {children}
        </Providers>

      </body>
    </html>
  )
}
