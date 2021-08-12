import React, { FC, useMemo } from "react";
import { FieldRenderProps } from "react-final-form";
import styled from "styled-components";
import ErrorMessage from "../ErrorMessage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label<{ error?: boolean }>`
  margin-bottom: 0.25rem;
  color: ${({ theme, error }) => error && theme.colors.error.main};
`;

const SSelect = styled.select<{ error?: boolean }>`
  background-color: ${({ theme }) => theme.colors.secondary.contrastText};
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 0;
  margin-bottom: 1rem;
  border: ${({ theme, error }) =>
    error
      ? `2px solid ${theme.colors.error.main}`
      : `2px solid ${theme.colors.border.main}`};
  &:focus {
    outline: none;
    border: ${({ theme, error }) =>
      !error && `2px solid ${theme.colors.primary.main}`};
  }
`;

type SelectInputProps = FieldRenderProps<string, HTMLInputElement>;

const SelectInput: FC<SelectInputProps> = ({ input, meta }) => {
  const label = useMemo(
    () => input.name[0].toUpperCase().concat(input.name.slice(1)),
    [input.name]
  );

  const err = meta.touched && meta.error;

  return (
    <Container>
      <Label error={err}>{label}</Label>
      <SSelect
        error={err}
        name={input.name}
        value={input.value}
        onChange={input.onChange}
      >
        <option value=""></option>
        <option value="Idea">Idea</option>
        <option value="Food">Food</option>
        <option value="Work">Work</option>
        <option value="Sport">Sport</option>
        <option value="Home">Home</option>
      </SSelect>
      {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
    </Container>
  );
};

export default SelectInput;
