import { ArrowRight } from '../../assets/ArrowRight'
import { Button } from './Button'
import { Form } from './Form'
import { Input } from './Input'

export function FormResetPass(){
  return (
    <Form btnText='Back' title='Reset password' back>
      <Input placeholder='Email' />
      <Button>
        Send link
        <ArrowRight height="1.25rem" width="1.5rem" color="#B5C401" />
      </Button>
    </Form>
  )
}