import styled from 'styled-components'

const Title = styled.h4`
  margin-top: 1.75rem;
  color: #868686;
  font-size: 1rem;
  font-style: italic;
`

const Description = styled.p`
  color: #868686;
  font-size: 1rem;
  font-style: italic;
`

export function DescriptionGame(props: { text: string }){
  return (
    <>
      <Title>Fill your bet</Title>
      <Description>
        {props.text}
      </Description>
    </>
  )
}