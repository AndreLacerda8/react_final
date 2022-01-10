import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin-top: 1rem;
`

const Title = styled.h1`
  font-size: 2.75rem;
  font-style: italic;
  color: var(--color-gray-strong);
`

const Underline = styled.div`
  width: 6.68rem;
  height: 0.44rem;
  background-color: var(--color-green);
  border-radius: 6px;
  position: absolute;
  bottom: -4px;
  left: -10px;
`

export function TitleHeader(){
  return (
    <Container>
      <Title>TGL</Title>
      <Underline />
    </Container>
  )
}