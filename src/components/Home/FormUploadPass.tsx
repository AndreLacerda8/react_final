import { useContext } from 'react'
import { ArrowRight } from '../../assets/ArrowRight'
import { UserInputsContext } from '../../contexts/UserContext'
import { Button } from './Button'
import { Form } from './Form'
import { Input } from './Input'

export function FormUploadPass(){
  const { uploadPassword, changePassword } = useContext(UserInputsContext)

  return (
    <Form onSubmit={uploadPassword} to='/login' btnText='Back' title='Reset password' back>
      <Input type='password' required placeholder='New password' onChange={event => changePassword(event.target.value)} />
      <Button>
        Upload Pass
        <ArrowRight height="1.25rem" width="1.5rem" color="#B5C401" />
      </Button>
    </Form>
  )
}