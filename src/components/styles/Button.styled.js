import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font: 16px 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
