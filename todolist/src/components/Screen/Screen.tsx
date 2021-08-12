import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 100%;
    align-items: flex-start;
  } ;
`;

const Screen: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Screen;
