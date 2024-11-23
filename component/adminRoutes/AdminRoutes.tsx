"use client";
import Card from "../adminCard/Card";
import { CardList, Container } from "./admin.styles";

const AdminRoutes = () => {
  return (
    <Container>
      <CardList>
        <Card title="Orders" value={200} />
        <Card title="Transactions" value={200} />
        <Card title="Income" value={200} />
      </CardList>
      cards
    </Container>
  );
};

export default AdminRoutes;
