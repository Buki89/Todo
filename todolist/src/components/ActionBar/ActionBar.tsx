import React, { FC } from "react";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ButtonBase from "../Button";
import Info from "../Info";

const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  margin-top: 0.5rem;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 1rem 0.5rem;
  } ;
`;

const Button = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors.primary.contrastText};
  color: ${({ theme }) => theme.colors.primary.main};
`;

type ActionBarProps = {};

const ActionBar: FC<ActionBarProps> = () => {
  const history = useHistory();

  const handleClick = useCallback(
    () => history.push("/select-task"),
    [history]
  );
  return (
    <Container>
      <Info />
      <Button type="button" onClick={handleClick}>
        Add New
      </Button>
    </Container>
  );
};

export default ActionBar;
