interface IProps{
  width?: string
  height?: string
  color: string
}

export function ArrowRight(props: IProps){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={props.height || '1.25rem'} width={props.width || '1.5rem'} fill={props.color}>
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
    </svg>
  )
}