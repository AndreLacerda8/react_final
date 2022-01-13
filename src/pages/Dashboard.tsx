import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { Main } from '../components/Dashboard/Main'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'

const DashboardStyle = styled.div`
  min-height: calc(100% - 7rem);
`

export function Dashboard(){
  const token = localStorage.getItem('authTokenLottery')

  let content = token ? (
    <Layout>
      <DashboardStyle>
        <Header />
        <Main />
      </DashboardStyle>
    </Layout>
  ) : <Navigate to='/' />

  return content
}