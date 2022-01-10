import styled from 'styled-components'

const Title = styled.h2`
  font-size: 1.5rem;
  font-style: italic;
  text-transform: uppercase;
  color: var(--color-gray-strong);
  margin-bottom: 2rem;

  & b{
    font-weight: normal;
  }
`

export function NewBetTitle(props: { text: string }){
  return (
    <Title>
      New Bet <b>For {props.text}</b>
    </Title>
  )
}