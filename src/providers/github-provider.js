import React, { Children, createContext, useState } from 'react'

export const GithubContext = createContext({
  user: {},
  repositories: [],
  starred: []
})

export default function GithubProvider() {
  const [githubState, setgithubState] = useState({
    user: {
      login: undefined,
      name: undefined,
      publicUrl: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0
    },
    repositories: [],
    starred: []
  })

  const contextValue = {}

  return (
    <GithubProvider.Provider value={contextValue}>
      {Children}
    </GithubProvider.Provider>
  )
}
