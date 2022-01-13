import { useContext } from 'react'
import { ArrowRight } from '../../assets/ArrowRight'
import { UserInputsContext } from '../../contexts/UserContext'
import { Button } from './Button'
import { Form } from './Form'
import { Input } from './Input'

export function FormRegister(){
  const {signUpHandler, changeName, changeEmail, changePassword} = useContext(UserInputsContext)

  return (
    <Form onSubmit={signUpHandler} to='/login' btnText='Back' title='Registration' back>
      <Input onChange={event => changeName(event.target.value)} required placeholder='Name' />
      <Input onChange={event => changeEmail(event.target.value)} required placeholder='Email' type='email' />
      <Input onChange={event => changePassword(event.target.value)} required placeholder='Password' type='password' />
      <Button>
        Register
        <ArrowRight height="1.25rem" width="1.5rem" color="#B5C401" />
      </Button>
    </Form>
  )
}