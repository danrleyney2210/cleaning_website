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

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 14px;

    li {
      cursor: pointer;
      font-weight: 500;

      &:hover {
        color: #555;
      }
    }
  }

`