import styled from 'styled-components'

const ButtonStyle = styled.button`
  padding: .5rem 1.75rem;
  margin-right: 1.25rem;
  border: 2px solid ${prop => prop.color};
  border-radius: 6.25rem;
  color: ${prop => prop.color};
  background-color: #fff;
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
  transition: filter .3s;

  &:hover{
    filter: brightness(.95);
  }

  &.selected{
    color: #fff;
    background-color: ${prop => prop.color};
  }

  @media(max-width: 720px){
    padding: .5rem 1rem;
    margin-right: 1rem;
  }
`

export function GameButton(props: { type: string, color: string, selected?: boolean, onClick?: () => void }){
  return (
    <ButtonStyle onClick={props.onClick} color={props.color} className={props.selected ? 'selected' : ''}>
      {props.type}
    </ButtonStyle>
  )
}