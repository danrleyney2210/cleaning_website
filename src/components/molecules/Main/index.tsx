import { Header } from '../Header'
import * as S from './styles'
import ImageMain from '../../../assets/image/main-2.png'
import { Button } from '../../atomos/Button'

export const Main = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Main>
        <div className='description'>
          <h1>
            <span>Contratar</span> um
            profissional em faxina, nunca foi tão <span>fácil</span>.
          </h1>

          <h3>Contrate de forma rápida, prática e segura um profissional
            de faxina para sua casa, escritório ou condomínio
          </h3>

          <Button style={{ padding: '0.75rem 3rem' }}>
            Contact Now
          </Button>

        </div>


        <div className="content-image">
          <img src={ImageMain} alt="" />
        </div>

      </S.Main>
    </S.Wrapper>
  )
}

