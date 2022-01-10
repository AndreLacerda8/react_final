import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { FormLogin } from '../components/Home/FormLogin'
import { Layout } from '../components/Layout'
import { Title } from '../components/Home/Title'

const HomeStyle = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: calc(100% - 5rem);
`

export function Home(){
  return (
    <Layout>
      <HomeStyle>
        <Title />
        <Routes>
          <Route path='/login' element={<FormLogin />} />
        </Routes>
      </HomeStyle>
    </Layout>
  )
}