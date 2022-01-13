import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { httpAxios } from '../../functions/axios'
import { GameButton } from '../GameButton'

const Title = styled.h4`
  font-size: 1rem;
  color: #868686;
  font-style: italic;
  margin-bottom: 1.25rem;
`

export function ChooseGame(props: { onFilter: (type: string) => void, filter: string }){
  const [games, setGames] = useState([])

  useEffect(() => {
    httpAxios('/cart_games').then(resp => setGames(resp.data.types))
  }, [])

  return(
    <>
      <Title>Choose a game</Title>
      <div>
      {games.map((game: any) => {
        return (
          <GameButton
            key={game.id}
            onClick={() => props.onFilter(game.type)}
            selected={props.filter === game.type}
            type={game.type}
            color={game.color}
          />
        )
      })}
      </div>
    </>
  )
}