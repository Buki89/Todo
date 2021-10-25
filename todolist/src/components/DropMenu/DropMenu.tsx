import React, { VFC } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary.contrastText};
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text.main};
  right: 0;
  top: 34px;
  z-index: 999;
  padding: 0.5rem;
`;

const Divider = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.text.main};
  margin: 0 -8px;
`;

type DropMenuProps = {
  open: boolean;
};

const DropMenu: VFC<DropMenuProps> = ({ open }) => {
  if (!open) {
    return null;
  }

  return (
    <Container>
      <div>Settings</div>
      <Divider />
      <div>Logout</div>
    </Container>
  );
};

export default DropMenu;
