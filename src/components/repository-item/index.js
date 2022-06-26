import React from 'react'
import * as S from './styled'

export default function RepositoryItem({ name, linkToRepo, fullName }) {
  return (
    <S.Wrapper>
      <h2>{name}</h2>
      <h4>full name:</h4>
      <a href={linkToRepo} target="_blank" rel="noreferrer">
        <span>{fullName}</span>
      </a>
    </S.Wrapper>
  )
}
