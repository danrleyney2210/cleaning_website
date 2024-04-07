import styled from "styled-components";


export const Wrapper = styled.div`
  width: 100%;
  background: rgb(213,253,255);
  background: linear-gradient(90deg, rgba(213,253,255,1) 0%, rgba(249,249,249,1) 40%, rgba(19,169,221,1) 100%);
`


export const Main = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .description {
    height: 600px;
    padding-bottom: 90px;
    max-width: 500px;
    /* background-color: red; */

    h1 {
      margin-top: 60px;
      font-weight: 600;
      font-size: 48px;
      line-height: 1;

      span {
        color: #68c0cf;
        font-weight: 600;
      }
    }

    h3 {
      margin-top: .7rem;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 10px;
    }
  }

  .content-image {
    max-width: 500px;

    img {
      height: fit-content;
      width: 100%;
    }
  }
  
`