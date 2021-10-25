import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 1.5rem;
  width: 300px;
  box-shadow: 3px 3px 3px ${({ theme }) => `${theme.colors.primary.main}50`};
  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    display: flex;
    flex-direction: column;
  }
`;

const Card: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
