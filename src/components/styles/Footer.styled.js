import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  img {
    margin-top: 40px;
    margin-bottom: 30px;
  }
  ul {
    list-style: none;
  }
  ul li {
    margin-bottom: 20px;
  }
  p {
    text-align: right;
    padding-bottom: 40px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
      padding-bottom: 30px;
    }
  } ;
`;
