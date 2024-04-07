
import { Main } from '../../components/molecules/Main'
import { Service } from '../../components/molecules/Service'
import * as S from './styles'


export const Home = () => {
  return (
    <S.Wrapper>
      <Main />
      <Service />
    </S.Wrapper>
  )
}

