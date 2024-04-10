import styled from "styled-components";

export const Wrapper = styled.div`
  
  width: 100%;
  /* background-color: ${({ theme }) => theme.bg}; */
  margin-top: -60px;

  /* h1 {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.primary['400']};
    font-weight: 600;
  } */

`

export const Card = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 34px;
  max-width: 420px;
  width: 100%;

  .w-icon {
    margin: 0 auto;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 18px;
  }

  .s-house {
    background-color: ${({ theme }) => theme.primary['100']};
  }

  .s-corporate {
    background-color: ${({ theme }) => theme.secondary['100']};
  }

  h4 {
    text-align: center;
    font-weight: 600;
    margin-top: 10px;
  }

  .description {
    margin: 30px 0;
    ul {
      li {
        font-weight: 400;
        color: #888;
      }
    }

    
  }

  button {
    margin: 0 auto;
  }


  
`


export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: 760px) {
    padding: 0 1rem;
    flex-direction: column;
    align-items: center;
  }
`

export const WrapperProfissional = styled.div`
  margin-top: 200px;
  width: 100%;

  @media (max-width: 1250px) {
  margin-top: 100px;
    
  }
`

export const ContentProfissional = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.primary["400"]};
  border-radius: 0px 70px 70px 0px;
  padding: 34px 64px 0px 104px;

  img {
    /* height: fit-content; */
    max-width: 600px;
    width: 100%;
    overflow: visible;
  }
  

  .description {
    height: fit-content;
    margin: auto 0;


    button {
      background-color: ${({ theme }) => theme.primary['100']};
      color: ${({ theme }) => theme.primary['800']};
      
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px;
      border-radius: 26px;
      margin-bottom: 16px;
      font-weight: 500;
      font-size: 14px;
      border: none;
      /* cursor: pointer; */
    }

    h1 {
      font-weight: 600;
      color: #fff;
    }

    p {
      margin-top: 16px;
      color: #fff;
      font-size: 14px;
      line-height: 1.4;
      font-weight: 200;
      max-width: 400px;
    }
  }

  @media (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
    padding: 24px 24px 24px 24px;
    width: 95%;

    .description {
      button {
        font-size: 12px;
      }

      h1 {
        line-height: 1;
        text-align: center;
      }

      p {
        text-align: start;
      }
    }
  }

  
`