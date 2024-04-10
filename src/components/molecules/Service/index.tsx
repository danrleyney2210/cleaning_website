import * as S from './styles'
import { FaWarehouse } from "react-icons/fa";
import { MdCorporateFare } from "react-icons/md";
import { Button } from '../../atomos/Button';
import Profissional from '../../../assets/image/main-image.png'

export const Service = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Card>
          <div className="w-icon s-house">
            <FaWarehouse size={24} color='#2CAABF' />
          </div>
          <h4 style={{ color: '#2CAABF' }}>Residential cleaning</h4>
          <div className="description">
            <ul>
              <li>Kitchen</li>
              <li>Bathrooms</li>
              <li>All Rooms</li>
            </ul>
          </div>

          <Button color='primary'>
            I want a home cleaning
          </Button>
        </S.Card>

        <S.Card>
          <div className="w-icon s-corporate">
            <MdCorporateFare size={24} color='#D5567B' />
          </div>
          <h4 style={{ color: '#D5567B' }}>Corporate cleaning</h4>

          <div className="description">
            <ul>
              <li>Kitchen</li>
              <li>Bathrooms</li>
              <li>All Rooms</li>
            </ul>
          </div>

          <Button>
            I want a corporate cleaning
          </Button>
        </S.Card>
      </S.Content>

      <S.WrapperProfissional>
        <S.ContentProfissional>

          <img src={Profissional} alt="" />


          <div className='description'>
            <button>
              The best professionals in the palm of your hand
            </button>
            <h1>Partner professionals</h1>
            <p>
              Todos especialistas são verificados pela Solvee.
              Tudo para garantir qualidade e segurança na hora de executar um serviço.
            </p>
          </div>
        </S.ContentProfissional>
      </S.WrapperProfissional>
    </S.Wrapper>
  )
}

