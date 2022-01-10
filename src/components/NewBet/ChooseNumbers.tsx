import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: .75rem;
  margin-top: 1.75rem;
`

const Number = styled.button`
  width: 4rem;
  height: 4rem;
  background-color: #ADC0C4;
  color: #fff;
  border-radius: 2rem;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  transition: filter .3s;

  &:hover{
    filter: brightness(.9);
  }
`

export function ChooseNumbers(props: { qtdNumbers: number }){
  const array = new Array(props.qtdNumbers).fill(0)

  return(
    <Container>
      {array.map((item, index) => {
        const num: string = index + 1 <= 9 ? '0' + (index + 1) : '' + (index + 1)
        return <Number>{num}</Number>
      })}
    </Container>
  )
}