
import { Main } from '../../components/molecules/Main'
import { Service } from '../../components/molecules/Service'
import { About } from '../../components/organism/About'
import { Testimonials } from '../../components/organism/Testimonials'
import * as S from './styles'


export const Home = () => {
  return (
    <S.Wrapper>
      <Main />
      <Service />
      <About />
      <Testimonials />
    </S.Wrapper>
  )
}

