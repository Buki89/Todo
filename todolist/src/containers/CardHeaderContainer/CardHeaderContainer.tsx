import React, { FC } from "react";
import { FiMenu } from "react-icons/fi";
import { MdTimer } from "react-icons/md";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";
import { useCallback } from "react";

const Container = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.primary.contrastText};
  justify-content: space-between;
  border-radius: 1.5rem 1.5rem 0 0;
  padding: 1rem;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0.5rem 1rem;
  } ;
`;

type CardHeaderContainerProps = {
  title: string;
};

const CardHeaderContainer: FC<CardHeaderContainerProps> = ({ title }) => {
  const location = useLocation();
  const history = useHistory();
  const pathname = location.pathname;
  const handleClick = useCallback(() => history.goBack(), [history]);
  return (
    <Container>
      {pathname === "/create" ? (
        <FaChevronLeft onClick={handleClick} />
      ) : (
        <MdTimer />
      )}
      <p>{title}</p>
      <FiMenu />
    </Container>
  );
};

export default CardHeaderContainer;
