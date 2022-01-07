import styled from 'styled-components'
import { Footer } from './Footer'

const LayoutStyle = styled.div`
  height: 100vh;
  width: 100%;
`

export function Layout(props: { children: any }){
  return (
    <LayoutStyle>
      {props.children}
      <Footer />
    </LayoutStyle>
  )
}