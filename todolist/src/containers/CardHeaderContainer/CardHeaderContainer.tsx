import React, { FC } from "react";
import { MdTimer } from "react-icons/md";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";
import { useCallback } from "react";
import { Avatar } from "../../components";

const Container = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.primary.contrastText};
  justify-content: space-between;
  border-radius: 1.5rem 1.5rem 0 0;
  padding: 1rem;
  align-items: center;
  position: relative;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0.5rem 1rem;
  } ;
`;

// const Menu = styled(FiMenu)<{ open?: boolean }>`
//   ${({ open }) => open && "color: #f5ff00"}
// `;

type CardHeaderContainerProps = {
  title: string;
};

const CardHeaderContainer: FC<CardHeaderContainerProps> = ({ title }) => {
  // const [open, setOpen] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const pathname = location.pathname;
  const handleClick = useCallback(() => history.goBack(), [history]);
  // const handleOpenMenu = useCallback(() => setOpen(!open), [open]);
  return (
    <Container>
      {pathname === "/create" || "select-task" ? (
        <FaChevronLeft onClick={handleClick} />
      ) : (
        <MdTimer />
      )}
      <p>{title}</p>
      <Avatar />
      {/* <Menu open={open} onClick={handleOpenMenu} /> */}
      {/* <DropMenu open={open} /> */}
    </Container>
  );
};

export default CardHeaderContainer;
