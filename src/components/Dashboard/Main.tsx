import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ArrowRight } from '../../assets/ArrowRight'
import { httpAxios } from '../../functions/axios'
import { GameButton } from '../GameButton'
import { BetCard } from './BetCard'

const MainStyle = styled.main`
  width: 100%;
  padding: 0 12.5rem 0 8.125rem;
  margin-top: 4.4rem;

  @media(max-width: 720px){
    padding: 0;
  }
`

const HeaderMain = styled.header`
  width: 100%;
  display: flex;
  align-items: center;

  @media(max-width: 720px){
    position: relative;
    margin-bottom: 10rem;
  }
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-style: italic;
  color: var(--color-gray-strong);
  margin-right: 2rem;
  margin-left: 2rem;
`

const ButtonFilter = styled.span`
  font-size: 1rem;
  font-style: italic;
  color: #868686;
  margin-right: 1rem;
  @media(max-width: 720px){
    position: absolute;
    bottom: -5.2rem;
    left: 2rem;
  }
`

const Filters = styled.div`
  @media(max-width: 720px){
    position: absolute;
    bottom: -6rem;
    left: 6rem;
  }
`

const ButtonNewBet = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  color: var(--color-green-light);
  margin-right: 1rem;
  margin-left: auto;
  cursor: pointer;
  transition: filter .3s;

  &:hover{
    filter: brightness(.9);
  }
`

export function Main(){
  const navigate = useNavigate()
  const token = localStorage.getItem('authTokenLottery')

  const [bets, setBets] = useState([])
  const [games, setGames] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    httpAxios('/cart_games').then(resp => setGames(resp.data.types))
  }, [])

  useEffect(() => {
    if(filter){
      httpAxios.get(`/bet/all-bets?type%5B%5D=${filter}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => setBets(resp.data))
    } else {
      httpAxios.get('/bet/all-bets', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => setBets(resp.data))
    }
  }, [filter, token])

  function navigateNewBet(){
    navigate('/newbet')
  }

  function filterHandler(type: string){
    if(filter === type){
      setFilter('')
    } else {
      setFilter(type)
    }
  }

  return (
    <MainStyle>
      <HeaderMain>
        <Title>Recent Games</Title>
        <ButtonFilter>Filters</ButtonFilter>
        <Filters>
          {games.map((game: any) => {
            return (
              <GameButton
                key={game.id}
                onClick={() => filterHandler(game.type)}
                selected={filter === game.type}
                type={game.type}
                color={game.color}
              />
            )
          })}
        </Filters>
        <ButtonNewBet onClick={navigateNewBet}>
          New Bet
          <ArrowRight color='#B5C401' />
        </ButtonNewBet>
      </HeaderMain>
      <div>
        {bets.map((bet: any) => {
          return (
            <BetCard
              key={bet.id}
              numbers={bet.choosen_numbers.split(',').map((num: string) => +num < 10 ? `0${num}` : num).join(',')}
              date={new Date(bet.created_at).toLocaleDateString()}
              price={bet.price.toFixed(2).replace('.', ',')}
              type={bet.type.type}
              color={bet.type.color}
            />
          )
        })}
      </div>
    </MainStyle>
  )
}