import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { httpAxios } from '../functions/axios'

export const UserInputsContext = createContext({
  error: '',
  token: '',
  changeEmail: (email: string) => {},
  changePassword: (password: string) => {},
  changeName: (name: string) => {},
  changeError: (error: string) => {},
  loginHandler: () => {},
  logoutHandler: () => {},
  resetPasswordHandler: () => {},
  uploadPassword: () => {},
  signUpHandler: () => {},
})

export function UserInputsContextProvider(props: any){
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState<string>('')
  const [token, setToken] = useState('')

  function changeEmail(email: string){
    setEmail(email)
  }

  function changePassword(password: string){
    setPassword(password)
  }

  function changeName(name: string){
    setName(name)
  }

  function changeError(error: string){
    setError(error)
  }

  async function loginHandler(){
    try{
      const { data } = await httpAxios.post('/login', {
        email,
        password
      })
      setTokenInLocalStorage(data.token.token)
      navigate('/dashboard')
    } catch(err: any){
      changeError(err.response.data.message)
    }
  }

  function logoutHandler(){
    localStorage.removeItem('authTokenLottery')
  }

  async function resetPasswordHandler(){
    try{
      const { data } = await httpAxios.post('/reset', {
        email
      })
      setTokenInLocalStorage(data.token)
      navigate('/uploadpassword')
    } catch(err: any){
      changeError(err.response.data.message)
    }
  }

  async function uploadPassword(){
    try{
      await httpAxios.post(`/reset/${token}`, {
        password
      })
      navigate('/')
    } catch(err: any){
      changeError(err.response.data.message)
    }
  }

  async function signUpHandler(){
    try{
      const { data } = await httpAxios.post('/user/create', {
        email,
        password,
        name
      })
      setTokenInLocalStorage(data.token.token)
      navigate('/dashboard')

    } catch(err: any){
      changeError(err.response.data.error.message || err.response.data.errors[0].message)
    }
  }

  function setTokenInLocalStorage(token: string){
    setToken(token)
    localStorage.setItem('authTokenLottery', token)
  }

  return (
    <UserInputsContext.Provider value={{
      changeEmail, changePassword, changeName,
      error, changeError, token,
      loginHandler, logoutHandler, resetPasswordHandler, uploadPassword, signUpHandler
    }}>
      {props.children}
    </UserInputsContext.Provider>
  )
}