import styled from 'styled-components'
import { NavHeader } from './NavHeader'
import { TitleHeader } from './TitleHeader'

const HeaderStyle = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12.5rem 0 8.125rem;
  margin-bottom: 4.4rem;
  border-bottom: 2px solid var(--color-gray-border);
`

export function Header(){
  return (
    <HeaderStyle>
      <TitleHeader />
      <NavHeader />
    </HeaderStyle>
  )
}