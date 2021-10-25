import React, { useState, VFC } from "react";
import { useCallback } from "react";
import styled from "styled-components";
import theme from "../../theme";

const checkboxSize = "1.5rem";

const Input = styled.input`
  position: relative;
  -webkit-appearance: none;
  border: 0;
  outline: 0;
  width: ${checkboxSize};
  height: ${checkboxSize};
  background: transparent;
  z-index: 0;
  cursor: pointer;
  margin: 0;
  &:checked:after {
    content: url(./checkmark.svg);
    display: block;
    width: ${checkboxSize};
    height: ${checkboxSize};
    position: absolute;
    top: 0;
    font-size: 1.25rem;
    left: 0px;
    z-index: 0;
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    color: #fff;
    text-align: center;
  }
  &:before {
    box-sizing: border-box;
    content: "";
    display: block;
    width: ${checkboxSize};
    height: ${checkboxSize};
    border: 1px solid ${theme.colors.primary.main};
    border-radius: 4px;
    background: "white";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
`;

const Container = styled.div`
  margin-right: 2rem;
`;

type Checkboxprops = {
  className?: string;
};

const Checkbox: VFC<Checkboxprops> = ({ className, ...rest }) => {
  const [checked, setChecked] = useState(false);
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLElement>) => setChecked(!checked),
    [checked]
  );
  return (
    <Container>
      <Input onChange={handleOnChange} type="checkbox" checked={checked} />
    </Container>
  );
};

export default Checkbox;
