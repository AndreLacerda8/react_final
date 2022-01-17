import styled from 'styled-components'
import { NavHeader } from './NavHeader'
import { TitleHeader } from './TitleHeader'

const HeaderStyle = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12.5rem 0 8.125rem;
  border-bottom: 2px solid var(--color-gray-border);

  @media(max-width: 720px){
    justify-content: center;
    padding: 0;
  }
`

export function Header(props: { haveLinkHome?: boolean }){
  return (
    <HeaderStyle>
      <TitleHeader haveLinkHome={props.haveLinkHome} />
      <NavHeader />
    </HeaderStyle>
  )
}