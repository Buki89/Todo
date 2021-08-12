import React, { FC } from "react";
import { Card, CardHeader, Screen } from "../../components";
import { CardHeaderContainer, CreateTaskForm } from "../../containers";

const TodoScreen: FC = () => (
  <Screen>
    <Card>
      <CardHeader>
        <CardHeaderContainer title="Create Task" />
      </CardHeader>
      <CreateTaskForm />
    </Card>
  </Screen>
);

export default TodoScreen;
