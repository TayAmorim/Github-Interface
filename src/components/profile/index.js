import React from 'react'
import * as S from './styled'

export default function Profile() {
  return (
    <S.Wrapper>
      <img
        src="https://avatars.githubusercontent.com/u/39008435?v=4"
        alt="Avatar of user"
      />
      <h1>Matheus Benites</h1>
      <h3>Username: </h3>
      <span>benites</span>
      <div>
        <div>
          <h4>Followers</h4>
          <span>5</span>
        </div>
        <div>
          <h4>Starreds</h4>
          <span>5</span>
        </div>
        <div>
          <h4>Followings</h4>
          <span>5</span>
        </div>
      </div>
    </S.Wrapper>
  )
}
