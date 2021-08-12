import React, { FC } from "react";
import { FiMenu } from "react-icons/fi";
import { MdTimer } from "react-icons/md";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.primary.contrastText};
  justify-content: space-between;
  border-radius: 1.5rem 1.5rem 0 0;
  padding: 1rem;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0.5rem 1rem;
  } ;
`;

type CardHeaderContainerProps = {
  title: string;
};

const CardHeaderContainer: FC<CardHeaderContainerProps> = ({ title }) => {
  return (
    <Container>
      <FiMenu />
      <p>{title}</p>
      <MdTimer />
    </Container>
  );
};

export default CardHeaderContainer;
