import { FC } from "react";
import styled from "styled-components";
import { Card, Screen } from "../../components";
import { LoginForm } from "../../containers";
import { GoChecklist } from "react-icons/go";

const Container = styled.div`
  color: #000;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary.contrastText};
  border-radius: 0 0 1.5rem 1.5rem;
  height: 400px;
  @media (max-width: 450px) {
    border-radius: 0;
    flex-grow: 1;
    height: auto;
  }
`;

const Icon = styled(GoChecklist)`
  align-self: center;
  margin-left: 1rem;
`;

const IConContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 1.5rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary.contrastText};
  text-align: center;
`;

type LoginScreenProps = {};

const LoginScreen: FC<LoginScreenProps> = () => {
  return (
    <Screen>
      <Card>
        <IConContainer>
          <Icon color="#fff" size="5rem" />
        </IConContainer>
        <Title>TODO list</Title>
        <Container>
          <LoginForm />
        </Container>
      </Card>
    </Screen>
  );
};

export default LoginScreen;
