import styled from 'styled-components'
import { Main } from '../components/Dashboard/Main'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'

const DashboardStyle = styled.div`
  min-height: calc(100% - 5rem);
`

export function Dashboard(){
  return (
    <Layout>
      <DashboardStyle>
        <Header />
        <Main />
      </DashboardStyle>
    </Layout>
  )
}