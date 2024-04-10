
import { Main } from '../../components/molecules/Main'
import { Service } from '../../components/molecules/Service'
import { About } from '../../components/organism/About'
import * as S from './styles'


export const Home = () => {
  return (
    <S.Wrapper>
      <Main />
      <Service />
      <About />
    </S.Wrapper>
  )
}

