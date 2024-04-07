import * as S from './styles'
import { FaWarehouse } from "react-icons/fa";
import { MdCorporateFare } from "react-icons/md";
import { Button } from '../../atomos/Button';

export const Service = () => {
  return (
    <S.Wrapper>
      <h1>Services</h1>
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

          <Button>
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
    </S.Wrapper>
  )
}

