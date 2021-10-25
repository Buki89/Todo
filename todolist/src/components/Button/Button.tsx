import React, { FC } from "react";
import styled from "styled-components";
import BaseLoading from "../Loading";

// const rotate = keyframes`
//   0% {
//     transform: rotate(0deg);
//   }
//   25% {
//     transform: rotate(-4deg);
//   }
//   50% {
//     transform: rotate(0deg);
//   }
//   75% {
//     transform: rotate(4deg);
//   }
//   100% {
//     transform: rotate(0deg);

//   }
// `;

const ButtonBase = styled.button`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.primary.contrastText};
  font-size: 0.875rem;
  font-weight: 600;
  border: 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  &:hover {
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  }
`;

const Loading = styled(BaseLoading)``;

type ButtonProps = {
  type: "button" | "submit" | "reset";
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
  children,
  type,
  className,
  onClick,
  disabled,
  loading,
}) => {
  return (
    <ButtonBase
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <Loading /> : children}
    </ButtonBase>
  );
};

export default Button;
