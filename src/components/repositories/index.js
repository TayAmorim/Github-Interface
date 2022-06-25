import React from 'react'
import * as S from './styled'

export default function Repositories() {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>Panel Reporsitories</S.WrapperTabPanel>
      <S.WrapperTabPanel>Panel Starred</S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}
