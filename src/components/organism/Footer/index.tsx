
import * as S from './styles'
import { FaFacebookSquare, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <S.Footer>
      <h1>Lu’s Cleaning</h1>


      <div className='content-social-media'>
        <S.Icon>
          <FaFacebookSquare size={19} />
        </S.Icon>

        <S.Icon>
          <FaTwitter size={19} />
        </S.Icon>

        <S.Icon>
          <FaLinkedinIn size={19} />
        </S.Icon>

        <S.Icon>
          <FaInstagram size={19} />
        </S.Icon>
      </div>

      <span>© Danrley Santos. All rights reserved</span>
    </S.Footer>
  )
}
