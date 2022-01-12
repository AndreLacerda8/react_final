import styled from 'styled-components'

interface IProps {
  second?: boolean
  back?: boolean
}

export const Button = styled.button`
  width: 80%;
  font-size: 2rem;
  font-weight: bold;
  font-style: italic;
  margin-top: ${(props: IProps) => props.second ? '1.8rem' : '0'};
  margin: 1.32rem auto;
  padding: 1rem 0;
  border-radius: 1rem;
  color: ${(props: IProps) => props.second ? 'var(--color-gray-strong)' : 'var(--color-green-light)'};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: filter .3s;
  &:hover{
    filter: brightness(.8);
  }

  & svg{
    margin-left: ${(props: IProps) => props.back ? '0' : '1rem'};
    margin-right: ${(props: IProps) => props.back ? '1rem' : '0'};
  }
`