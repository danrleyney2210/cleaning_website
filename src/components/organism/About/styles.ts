import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  

  .container {
    margin: 50px auto;
    max-width: 1024px;
    width: 100%;

    h1 {
      font-weight: 600;

      span {
        color: ${({ theme }) => theme.primary['500']};
        font-weight: 600;
      }
    }

    p {
      font-weight: 300;
      
    }

    .content-cards {
      margin-top: 50px;
      display: flex;
      
      gap: 24px;
    }
  }


  .services {
    background-color: #f1f2f3;

    .wrapper-service {
      display: flex;
      gap: 24px;
      max-width: 1024px;
      margin: 0 auto;
      padding: 54px 0;


      .content-image {
        max-width: 500px;
        width: 100%;

        img {
          width: 100%;
          background-size: cover;
          border-radius: 24px;
        }
      }

      .warraper-card {
        h1 {
          font-weight: 600;
          margin-bottom: 24px;

          span {
            font-weight: 600;
            color: ${({theme})=> theme.primary['500']}};
          }
        .wrapper-content-card {
          display: flex;
          flex-direction: column;
          gap: 27px;

          .content-card {
            width: 100%;
            display: flex;
            gap: 24px;
            
          
            div {
              h3 {
                font-weight: 600;
                color: ${({theme})=> theme.primary['800']};
              }
  
              p {
                font-weight: 300;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .container {

      h1 {
        line-height: 1.3;
        margin-bottom: 1rem;
        text-align: center;
      }

      p {
        text-align: center;
        font-size: 14px;
      }


      .content-cards {
        flex-direction: column;
      }
    }

    .services {
      padding: 0  16px;
      .wrapper-service {
        flex-direction: column;
        align-items: center;
      }
    }

  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;

  h1 {
    margin-top: 10px;
    font-size: 24px;
  }

  p {
    font-weight: 300;
    text-align: center;
    line-height: 1.4;
    font-size: 14px;
  }

  .icon {
    background-color: #d1d2d3;
    padding: 16px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: fit-content;

    background-color :${({ theme }) => theme.primary['100']}
  }
  
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 12px;
`