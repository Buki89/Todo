import React, { FC } from "react";
import styled from "styled-components";

const Error = styled.p`
  position: absolute;
  bottom: 0;
  left: 5px;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.error.main};
`;

const ErrorMessage: FC<{ className?: string }> = ({ children, className }) => {
  return <Error className={className}>{children}</Error>;
};

export default ErrorMessage;
