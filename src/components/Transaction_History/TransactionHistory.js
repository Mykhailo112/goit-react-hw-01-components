import { Table, Title, Text } from './TransactionHistory.styles';

export const TransactionsList = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </tr>
      </thead>
      <tbody>
        {items.map(stat => (
          <tr key={stat.id}>
            <Text>{stat.type}</Text>
            <Text>{stat.amount}</Text>
            <Text>{stat.currency}</Text>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
