import { useContext } from 'react'
import { ArrowRight } from '../../assets/ArrowRight'
import { UserInputsContext } from '../../contexts/UserContext'
import { Button } from './Button'
import { Form } from './Form'
import { Input } from './Input'

export function FormResetPass(){
  const { resetPasswordHandler, changeEmail } = useContext(UserInputsContext)

  return (
    <Form onSubmit={resetPasswordHandler} to='/login' btnText='Back' title='Reset password' back>
      <Input type='email' required placeholder='Email' onChange={event => changeEmail(event.target.value)} />
      <Button>
        Send link
        <ArrowRight height="1.25rem" width="1.5rem" color="#B5C401" />
      </Button>
    </Form>
  )
}