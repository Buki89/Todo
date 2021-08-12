import React, { FC, useMemo } from "react";
import { FieldRenderProps } from "react-final-form";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi";
import ErrorMessage from "../ErrorMessage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ErrorIcon = styled(MdCancel)`
  position: absolute;
  padding: 0;
  margin: 0.5rem;
  color: #c21313;
  top: 22px;
  right: 0;
`;

const Check = styled(HiCheckCircle)`
  position: absolute;
  padding: 0;
  margin: 0.5rem;
  color: #058818;
  top: 22px;
  right: 0;
`;

const SInput = styled.input<{ error?: boolean }>`
  background-color: ${({ theme }) => theme.colors.secondary.contrastText};
  border-radius: 0.5rem;
  width: calc(100% - 1.25rem);
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

const Label = styled.label<{ error?: boolean }>`
  margin-bottom: 0.25rem;
  color: ${({ theme, error }) => error && theme.colors.error.main};
`;

type InputProps = FieldRenderProps<string, HTMLInputElement> & {
  type?: "email" | "password" | "text";
};

const Input: FC<InputProps> = ({ input, meta, type }) => {
  const label = useMemo(
    () => input.name[0].toUpperCase().concat(input.name.slice(1)),
    [input.name]
  );

  const err = meta.touched && meta.error;

  return (
    <Container>
      <Label error={err}>{label}</Label>
      <SInput
        {...input}
        name={input.name}
        value={input.value}
        onChange={input.onChange}
        type={type}
        error={err}
      />
      {(meta.touched || meta.active) && meta.error && (
        <ErrorIcon size="1.5rem" />
      )}
      {(meta.touched || meta.active) && meta.valid && input.value && (
        <Check size="1.5rem" />
      )}
      {(meta.touched || meta.active) && meta.error && (
        <ErrorMessage>{meta.error}</ErrorMessage>
      )}
    </Container>
  );
};

export default Input;
