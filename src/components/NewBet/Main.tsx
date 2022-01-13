import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { httpAxios } from '../../functions/axios'
import { Actions } from './Actions'
import { Cart } from './Cart'
import { ChooseGame } from './ChooseGame'
import { ChooseNumbers } from './ChooseNumbers'
import { DescriptionGame } from './DescriptionGame'
import { NewBetTitle } from './NewBetTitle'

const MainStyle = styled.main`
  padding: 0 12.5rem 0 8.125rem;
  display: flex;
`

const SectionGames = styled.section`
  margin-top: 4.6rem;
  width: 68%;
`

const SectionCart = styled.section`
  margin-top: 2.6rem;
  margin-left: 2.5rem;
  width: 35%;
`

interface IGame{
  id: number
  type: string
  description: string
  range: number
  price: number
  max_number: number
  color: string
}

export function Main(){
  const [games, setGames] = useState<IGame[]>([])
  const [currentGame, setCurrentGame] = useState<IGame>()
  const [numbersSelected, setNumbersSelected] = useState<string[]>([])

  useEffect(() => {
    async function getGames(){
      try{
        const { data } = await httpAxios('/cart_games')
        setGames(data.types)
        setCurrentGame(data.types[0])
      } catch(err){
        alert('Error')
      }
    }
    getGames()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function filterHandler(type: string){
    const gameSelected = games.find(game => game.type === type)
    if(gameSelected){
      setCurrentGame(gameSelected)
    }
    clearNumbers()
  }

  function selectNumberHandler(event: any, number: string){
    if(event.target.classList.contains('selected')){
      event.target.classList.remove('selected')
      setNumbersSelected(prev => prev.filter(num => num !== number))
    } else {
      if(numbersSelected.length >= (currentGame?.max_number || 0)){
        return alert('Máximos de números atingido')
      }
      event.target.classList.add('selected')
      setNumbersSelected(prev => [...prev, number])
    }
  }

  function clearNumbers(){
    const nums = document.querySelectorAll('[data-js="numBtn"]')
    nums.forEach(num => {
      num.classList.remove('selected')
    })
    setNumbersSelected([])
  }

  return (
    <MainStyle>
      <SectionGames>
        <NewBetTitle text={currentGame?.type || ''} />
        <ChooseGame onFilter={filterHandler} filter={currentGame?.type || ''} />
        <DescriptionGame text={currentGame?.description || ''} />
        <ChooseNumbers onToggleNumber={selectNumberHandler} maxNumbers={currentGame?.max_number || 0} qtdNumbers={currentGame?.range || 0} />
        <Actions onClear={clearNumbers} />
      </SectionGames>
      <SectionCart>
        <Cart />
      </SectionCart>
    </MainStyle>
  )
}