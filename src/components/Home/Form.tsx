import styled from 'styled-components'
import { ArrowLeft } from '../../assets/ArrowLeft'
import { ArrowRight } from '../../assets/ArrowRight'
import { Button } from './Button'

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

const FormStyled = styled.form`
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

export function Form(props: { children: any, btnText: string, title: string, back?: boolean }) {
  return (
    <FormWrap>
      <Title>{props.title}</Title>
      <FormStyled>
        {props.children}
      </FormStyled>
      <Button second back={props.back}>
        {props.back && <ArrowLeft height="1.25rem" width="1.5rem" color="#707070" />}
        {props.btnText}
        {!props.back && <ArrowRight height="1.25rem" width="1.5rem" color="#707070" />}
      </Button>
    </FormWrap>
  )
}