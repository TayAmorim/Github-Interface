import React from 'react'
import { ResetCSS } from './components/global/resetCSS'
import Layout from './components/layout'
import Profile from './components/profile'
import Repositories from './components/repositories'

const App = () => {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <Repositories/>
      </Layout>
    </main>
  )
}

export default App
