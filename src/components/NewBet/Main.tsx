import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { httpAxios } from '../../functions/axios'
import { cartActions } from '../../store/cart'
import { Actions } from './Actions'
import { Cart } from './Cart'
import { ChooseGame } from './ChooseGame'
import { ChooseNumbers } from './ChooseNumbers'
import { DescriptionGame } from './DescriptionGame'
import { NewBetTitle } from './NewBetTitle'

const MainStyle = styled.main`
  padding: 0 12.5rem 0 8.125rem;
  display: flex;

  @media(max-width: 720px){
    padding: 0;
    flex-direction: column;
  }
`

const SectionGames = styled.section`
  margin-top: 4.6rem;
  width: 68%;

  @media(max-width: 720px){
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }
`

const SectionCart = styled.section`
  margin-top: 2.6rem;
  margin-left: 2.5rem;
  width: 35%;

  @media(max-width: 720px){
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }
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

  const { betsOnCart, numbersSelected } = useSelector((state: { cart: any }) => state.cart)
  const dispatch = useDispatch()
  
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
      dispatch(cartActions.setNumbersSelected({ numbers: numbersSelected.filter((num: any) => num !== number) }))
    } else {
      if(numbersSelected.length >= (currentGame?.max_number || 0)){
        return alert('M??ximos de n??meros atingido')
      }
      event.target.classList.add('selected')
      dispatch(cartActions.setNumbersSelected({ numbers: [...numbersSelected, number] }))
    }
  }

  function clearNumbers(){
    const nums = document.querySelectorAll('[data-js="numBtn"]')
    nums.forEach(num => {
      num.classList.remove('selected')
    })
    dispatch(cartActions.setNumbersSelected({ numbers: [] }))
  }

  function completeGame(){
    const qtdNumbersSelected = numbersSelected.length
    const maxNumbers = currentGame?.max_number as number
    if(qtdNumbersSelected === maxNumbers){
      clearNumbers()
    }
    const randomNumbers = generateRandomNumbers(maxNumbers - qtdNumbersSelected, maxNumbers)
    const nums = document.querySelectorAll('[data-js="numBtn"]')
    nums.forEach(num => {
      if(randomNumbers.includes(num.innerHTML))
        num.classList.add('selected')
    })
    dispatch(cartActions.setNumbersSelected({ numbers: [...numbersSelected, ...randomNumbers] }))
  }

  function generateRandomNumbers(qtdNumbers: number, max: number){
    if(qtdNumbers < 0){
      return []
    }
    if(qtdNumbers === 0){
      qtdNumbers = max
    }
    const numbers: string[] = []
    for(let i = 0; i < qtdNumbers; i++){
      let random: number | string = Math.floor((Math.random()) * (currentGame?.range || 0) + 1)
      random = random < 10 ? `0${random}` : `${random}`
      if(numbers.includes(random) || (numbersSelected.includes(random) && qtdNumbers !== max)){
        i--
      } else {
        numbers.push(random)
      }
    }
    return numbers
  }

  function addBetOnCart(){
    const qtdNumbersMissing = (currentGame?.max_number || 0) - numbersSelected.length
    if(numbersSelected.length < (currentGame?.max_number || 0)){
      return alert('Escolha mais ' + qtdNumbersMissing + (qtdNumbersMissing === 1 ? ' n??mero' : ' n??meros'))
    }
    dispatch(cartActions.addBet({bet: {
      id: Math.random().toString(),
      game_id: currentGame?.id,
      price: currentGame?.price.toFixed(2).replace('.', ','),
      type: currentGame?.type,
      color: currentGame?.color
    }}))
    clearNumbers()
  }

  function deleteBetOnCart(id: string){
    const bet = betsOnCart.find((curBet: any) => curBet.id === id)
    dispatch(cartActions.removeBet({ bet }))
  }

  return (
    <MainStyle>
      <SectionGames>
        <NewBetTitle text={currentGame?.type || ''} />
        <ChooseGame onFilter={filterHandler} filter={currentGame?.type || ''} />
        <DescriptionGame text={currentGame?.description || ''} />
        <ChooseNumbers onToggleNumber={selectNumberHandler} maxNumbers={currentGame?.max_number || 0} qtdNumbers={currentGame?.range || 0} />
        <Actions onAddToCart={addBetOnCart} onComplete={completeGame} onClear={clearNumbers} />
      </SectionGames>
      <SectionCart>
        <Cart deleteBet={deleteBetOnCart} />
      </SectionCart>
    </MainStyle>
  )
}