import styled from 'styled-components'

const TitleWrap = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-strong);
  font-style: italic;

  @media(max-width: 720px){
    margin-top: 3rem;
  }
`

const PrimaryTitle = styled.span`
  font-size: 4rem;
  max-width: 15.25rem;
  text-align: center;
`

const SecondTitle = styled.span`
  background-color: var(--color-green-light);
  color: #fff;
  font-size: 1.375rem;
  display: block;
  text-align: center;
  width: 9rem;
  height: 2.44rem;
  line-height: 2.44rem;
  border-radius: 6.25rem;
  margin: 1.875rem 0 1.25rem;
`

const ThirdTitle = styled.span`
  font-size: 5.12rem;

  @media(max-width:720px){
    font-size: 4.5rem;
  }
`

export function Title(){
  return (
    <TitleWrap>
      <PrimaryTitle>The Greatest App</PrimaryTitle>
      <SecondTitle>for</SecondTitle>
      <ThirdTitle>LOTTERY</ThirdTitle>
    </TitleWrap>
  )
}