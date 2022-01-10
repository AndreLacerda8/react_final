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

export function DescriptionGame(){
  return (
    <>
      <Title>Fill your bet</Title>
      <Description>
        Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.
      </Description>
    </>
  )
}