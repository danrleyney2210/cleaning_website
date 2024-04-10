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