import React, { FC } from "react";
import {
  ActionBar,
  Card,
  CardHeader,
  CategoryList,
  Screen,
} from "../../components";
import { CardHeaderContainer } from "../../containers";
import { format } from "date-fns";

type DashboardScreenProps = {};

const DashboardScreen: FC<DashboardScreenProps> = () => {
  const formattedDate = format(new Date(), "d LLL");
  return (
    <Screen>
      <Card>
        <CardHeader>
          <CardHeaderContainer title={formattedDate} />
          <ActionBar />
        </CardHeader>
        <CategoryList />
      </Card>
    </Screen>
  );
};

export default DashboardScreen;
