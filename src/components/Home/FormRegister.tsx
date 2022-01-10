import { ArrowRight } from '../../assets/ArrowRight'
import { Button } from './Button'
import { Form } from './Form'
import { Input } from './Input'

export function FormRegister(){
  return (
    <Form to='/login' btnText='Back' title='Registration' back>
      <Input placeholder='Name' />
      <Input placeholder='Email' />
      <Input placeholder='Password' />
      <Button>
        Register
        <ArrowRight height="1.25rem" width="1.5rem" color="#B5C401" />
      </Button>
    </Form>
  )
}