import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const ContainerTitle = styled.div`
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
  background-color: var(--color-green-light);
  border-radius: 6px;
  position: absolute;
  bottom: -4px;
  left: -10px;
`

export function TitleHeader(props: { haveLinkHome?: boolean }){
  return (
    <Container>
      <ContainerTitle>
        <Title>TGL</Title>
        <Underline />
      </ContainerTitle>
      {props.haveLinkHome && (
        <Link to='/dashboard' style={{
          textDecoration: 'none',
          color: 'var(--color-gray-strong)',
          fontSize: '1.25rem',
          fontStyle: 'italic',
          fontWeight: 'bold',
          marginTop: '1.75rem',
          marginLeft: '4.625rem'
        }}>
          Home
        </Link>
      )}
    </Container>
  )
}