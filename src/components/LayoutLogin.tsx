import styled from 'styled-components'
import { Layout } from './Layout'
import { Title } from './Title'

const LayoutLoginStyle = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: calc(100% - 5rem);
`

export function LayoutLogin(){
  return (
    <Layout>
      <LayoutLoginStyle>
        <Title />
      </LayoutLoginStyle>
    </Layout>
  )
}