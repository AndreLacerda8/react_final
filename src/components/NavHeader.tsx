import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ArrowRight } from '../assets/ArrowRight'
import { UserInputsContext } from '../contexts/UserContext'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & li button{
    color: var(--color-gray-strong);
    font-size: 1.25rem;
    font-weight: bold;
    font-style: italic;
  }
`

const Item = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  padding: .8rem;
  margin-left: 2rem;
  cursor: pointer;

  & svg{
    margin-left: .5rem;
  }
`

export function NavHeader(){
  const navigate = useNavigate()

  const { logoutHandler } = useContext(UserInputsContext)

  function logout(){
    logoutHandler()
    navigate('/')
  }

  return (
    <nav>
      <Ul>
        <li>
          <Item>Account</Item>
        </li>
        <li>
          <Item onClick={logout}>
            Log out
            <ArrowRight color='#707070' />
          </Item>
        </li>
      </Ul>
    </nav>
  )
}