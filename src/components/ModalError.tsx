import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { UserInputsContext } from '../contexts/UserContext'

const Modal = styled.div`
  width: 15rem;
  padding: 1rem;
  text-align: center;
  color: #fff;
  background-color: #d60823e4;
  border-radius: 30px;
  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 100;

  animation: show linear .3s;

  @keyframes show{
    from {
      transform: translateX(16rem);
    }
    to{
      transform: translateX(0);
    }
  }
`

export function ModalError(){
  const {error, changeError} = useContext(UserInputsContext)

  useEffect(() => {
    const timer = setTimeout(() => {
      changeError('')
    }, 3000);

    return () => {
      clearTimeout(timer)
    }
  }, [changeError])

  return (
    <Modal>
      {error}
    </Modal>
  )
}