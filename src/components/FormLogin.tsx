import styled from 'styled-components'

const FormWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  width: 21rem;
`

const Title = styled.h2`
  color: var(--color-gray-strong);
  font-size: 2.2rem;
  font-style: italic;
  margin-bottom: 1.625rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 1rem;
  box-shadow: 0px 3px 25px #00000014;
  width: 100%;
`

const Input = styled.input`
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
  background-color: transparent;
  color: var(--color-gray-medium);
  padding: 2rem 1.8rem 1.5rem;
  border: 0;
  border-bottom: 2px solid var(--color-gray-border);
`

const ForgotPass = styled.a`
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

const Button = styled.button`
  width: 80%;
  font-size: 2rem;
  margin: 1.32rem auto;
  padding: 1rem 0;
  border-radius: 1rem;
  color: var(--color-green);
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: filter .3s;
  &:hover{
    filter: brightness(.8);
  }
`

const SignUpButton = styled(Button)`
  color: var(--color-gray-strong);
  margin-top: 1.8rem;
`

export function FormLogin(){
  return (
    <FormWrap>
      <Title>Authentication</Title>
      <Form>
        <Input placeholder='Email' />
        <Input placeholder='Password' />
        <ForgotPass>I forget my password</ForgotPass>
        <Button>Log In</Button>
      </Form>
      <SignUpButton>Sign Up</SignUpButton>
    </FormWrap>
  )
}