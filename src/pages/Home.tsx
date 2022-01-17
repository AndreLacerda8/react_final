import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { FormLogin } from '../components/Home/FormLogin'
import { Layout } from '../components/Layout'
import { Title } from '../components/Home/Title'
import { FormResetPass } from '../components/Home/FormResetPass'
import { FormRegister } from '../components/Home/FormRegister'
import { ModalError } from '../components/ModalError'
import { useContext } from 'react'
import { UserInputsContext } from '../contexts/UserContext'
import { FormUploadPass } from '../components/Home/FormUploadPass'

const HomeStyle = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: calc(100% - 7rem);

  @media(max-width: 720px){
    flex-direction: column;
  }
`

export function Home(){
  const {error} = useContext(UserInputsContext)

  return (
    <Layout>
      {error && <ModalError />}
      <HomeStyle>
        <Title />
        <Routes>
          <Route path='/login' element={<FormLogin />} />
          <Route path='/resetpassword' element={<FormResetPass />} />
          <Route path='/uploadpassword' element={<FormUploadPass />} />
          <Route path='/registration' element={<FormRegister />} />
        </Routes>
      </HomeStyle>
    </Layout>
  )
}