import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 44px;

  display: flex;
  justify-content: center;
`

export const Header = styled.div`
  max-width: 1024px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  

  @media (max-width: 1050px) {
    padding: 0 1rem;
  }

  @media (max-width: 650px) {
    
  }
`