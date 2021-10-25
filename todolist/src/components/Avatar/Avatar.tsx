import React, { FC } from "react";
import styled from "styled-components";

const AvatarContainer = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border: 1px solid #b8b0cf;
  background-color: #b8b0cf;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #403759;
  font-weight: 600;
  font-size: 1rem;
`;

type AvatarProps = {};

const Avatar: FC<AvatarProps> = () => {
  return <AvatarContainer>OB</AvatarContainer>;
};

export default Avatar;
