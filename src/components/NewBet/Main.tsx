import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { httpAxios } from '../../functions/axios'
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
  }

  return (
    <MainStyle>
      <SectionGames>
        <NewBetTitle text={currentGame?.type || ''} />
        <ChooseGame onFilter={filterHandler} filter={currentGame?.type || ''} />
        <DescriptionGame text={currentGame?.description || ''} />
        <ChooseNumbers qtdNumbers={currentGame?.max_number || 0} />
      </SectionGames>
      <SectionCart>
        <Cart />
      </SectionCart>
    </MainStyle>
  )
}