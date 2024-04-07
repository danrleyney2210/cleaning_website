import * as S from './styles'


interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({ children, ...rest }: IButtonProps) => {
  return (
    <S.Button {...rest}>
      {children}
    </S.Button>
  )
}
