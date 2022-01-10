import styled from 'styled-components'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { Main } from '../components/NewBet/Main'

const NewBetStyle = styled.div`
  min-height: calc(100% - 7rem);
`

export function NewBet(){
  return (
    <Layout>
      <NewBetStyle>
        <Header />
        <Main />
      </NewBetStyle>
    </Layout>
  )
}