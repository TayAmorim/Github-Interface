import React from 'react'
import GithubProvider from './providers/github-provider'
import { ResetCSS } from './components/global/resetCSS'
import App from './App'

export default function Providers() {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  )
}
