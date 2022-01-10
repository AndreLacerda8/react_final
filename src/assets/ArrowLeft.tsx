interface IProps{
  width?: string
  height?: string
  color: string
}

export function ArrowLeft(props: IProps){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={props.height || '1.25rem'} width={props.width || '1.5rem'} fill={props.color}>
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>
  )
}