import styled from 'styled-components'
import { ArrowRight } from '../assets/ArrowRight'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--color-gray-strong);
  font-size: 1.25rem;
  font-weight: bold;
  font-style: italic;
`

const Li = styled.li`
  display: flex;
  align-items: center;
  padding: .8rem;
  margin-left: 2rem;

  & svg{
    margin-left: .5rem;
  }
`

export function NavHeader(){
  return (
    <nav>
      <Ul>
        <Li>Account</Li>
        <Li>
          Log out
          <ArrowRight color='#707070' />
        </Li>
      </Ul>
    </nav>
  )
}