import * as S from './styles'
import { IoMdPhonePortrait } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";

export const About = () => {
  return (
    <S.Wrapper>
      <div className='container'>
        <h1>What does <span>Lu’s Cleaning</span> do?</h1>
        <p>We make it simple for you to hire cleaning specialists.</p>
        <p>We connect you with the best professionals in the area and speed up all the bureaucratic aspects.</p>

        <div className='content-cards'>
          <S.Card>
            <div className="icon">
              <IoMdPhonePortrait size={24} />
            </div>
            <h1>Contact us</h1>
            <p>
              Send a message explaining what you need.
            </p>
          </S.Card>
          <S.Card>
            <div className="icon">
              <IoDocumentTextOutline size={24} />
            </div>
            <h1>Receive quotes</h1>
            <p>
              Receive quotes directly on your WhatsApp.
            </p>
          </S.Card>
          <S.Card>
            <div className="icon">
              <AiOutlineLike size={24} />
            </div>
            <h1>Enjoy!</h1>
            <p>
              Now the rest is all up to us!
            </p>
          </S.Card>
        </div>

        {/* <div className='services'>
          <div>
            <h1>asdasdasd</h1>
          </div>

          <div>
            <h1>With <span>Lu’s Cleaning</span> you have...</h1>
            <div>
              
            </div>
          </div>
        </div> */}
      </div>
    </S.Wrapper>
  )
}

