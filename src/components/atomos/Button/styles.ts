import styled from "styled-components";


export const Button = styled.button`
  &[data-color=primary] {
    background-color: ${({ theme }) => theme.primary['500']};

    &:hover {
    background-color: ${({ theme }) => theme.primary['400']};
  }
  }

  background-color: #D5567B;
  color: #fff;
  padding: .75rem 1.5rem;
  border-radius: .75rem;
  border: none;
  font-size: 1rem;
  font-weight: 200;
  cursor: pointer;

  &:hover {
    background-color: #F5789D;
  }
`