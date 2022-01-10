import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin-top: 2rem;
  position: relative;
`

const Line = styled.div`
  position: absolute;
  width: 6px;
  height: 100%;
  border-radius: 6.25rem;
  background-color: ${prop => prop.color};
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 1.2rem;
`

const SpanNumbers = styled.span`
  color: #868686;
  font-size: 1.25rem;
  font-weight: bold;
  font-style: italic;
`

const SpanInfos = styled.span`
  color: #868686;
  font-size: 1rem;
`

const Type = styled.h3`
  color: ${prop => prop.color};
  font-size: 1.25rem;
  font-weight: bold;
  font-style: italic;
`

export function BetCard(props: { numbers: string, date: string, price: string, type: string, color: string }){
  return (
    <Container>
      <Line color={props.color} />
      <Card color={props.color}>
        <SpanNumbers>{props.numbers}</SpanNumbers>
        <SpanInfos>{props.date} - (R${props.price})</SpanInfos>
        <Type color={props.color}>{props.type}</Type>
      </Card>
    </Container>
  )  
}