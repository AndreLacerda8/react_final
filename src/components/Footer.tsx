import styled from 'styled-components'

const FooterStyle = styled.footer`
  width: 100%;
  height: 5rem;
  font-size: 1rem;
  color: var(--color-gray-strong);
  border-top: 2px var(--color-gray-border) solid;
  padding: 1.85rem 0 2rem;
  text-align: center;
`

export function Footer(){
  return(
    <FooterStyle>
      Copyright 2020 Luby Software
    </FooterStyle>
  )
}