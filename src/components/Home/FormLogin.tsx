import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ArrowRight } from '../../assets/ArrowRight'
import { Button } from './Button'
import { Form } from './Form'
import { Input } from './Input'

const ForgotPass = styled.span`
  color: var(--color-gray-light);
  font-size: 1rem;
  font-style: italic;
  text-decoration: none;
  text-align: right;
  margin: 1.68rem 1.68rem 0;
  cursor: pointer;
  transition: filter .3s;
  &:hover{
    filter: brightness(.8);
  }
`

export function FormLogin(){
  return (
    <Form btnText='Sign Up' title='Authentication'>
      <Input placeholder='Email' />
      <Input placeholder='Password' />
      <ForgotPass>
        <Link to='/resetpassword' style={{
          textDecoration: 'none',
          color: 'inherit'
        }}>
          I forget my password
        </Link>
      </ForgotPass>
      <Button>
        Log In
        <ArrowRight height="1.25rem" width="1.5rem" color="#B5C401" />
      </Button>
    </Form>
  )
}