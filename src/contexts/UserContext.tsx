import { createContext, useState } from 'react'
import { httpAxios } from '../functions/axios'

export const UserInputsContext = createContext({
  error: '',
  changeEmail: (email: string) => {},
  changePassword: (password: string) => {},
  changeName: (name: string) => {},
  changeError: (error: string) => {},
  loginHandler: () => {},
  resetPasswordHandler: () => {},
  signUpHandler: () => {}
})

export function UserInputsContextProvider(props: any){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState<string>('')

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
      console.log(data)
    } catch(err: any){
      changeError(err.response.data.message)
    }
  }

  async function resetPasswordHandler(){
    try{
      const { data } = await httpAxios.post('/reset', {
        email
      })
      console.log(data)
    } catch(err: any){
      console.log(err.response)
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
      console.log(data)
    } catch(err: any){
      changeError(err.response.data.message)
    }
  }

  return (
    <UserInputsContext.Provider value={{
      changeEmail, changePassword, changeName,
      error, changeError,
      loginHandler, resetPasswordHandler, signUpHandler
    }}>
      {props.children}
    </UserInputsContext.Provider>
  )
}