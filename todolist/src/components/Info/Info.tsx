import React, { FC } from "react";
import styled from "styled-components";
import { useTasksContext } from "../../context/Tasks/tasks-context";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

const Day = styled.h3`
  padding: 0;
  font-size: 1.25rem;
  color: #fff;
  font-weight: 600;
  margin: 0;
`;

const TaskCount = styled.p`
  padding: 0;
  font-size: 0.875rem;
  color: #fff;
  font-weight: 400;
  margin: 0;
`;

type InfoProps = {};

const Info: FC<InfoProps> = () => {
  const { state } = useTasksContext();

  const tasks = state.tasks.length ?? 0;

  return (
    <Container>
      <Day>Today</Day>
      <TaskCount>{`${tasks} tasks`}</TaskCount>
    </Container>
  );
};

export default Info;
