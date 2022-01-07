import styled from 'styled-components'

const FooterComponent = styled.footer`
  width: 100%;
  font-size: 1rem;
  color: var(--color-gray-strong);
  border-top: 2px var(--color-gray-border) solid;
  padding: 1.85rem 0 2rem;
  text-align: center;

  position: absolute;
  bottom: 0;
`

export function Footer(){
  return(
    <FooterComponent>
      Copyright 2020 Luby Software
    </FooterComponent>
  )
}