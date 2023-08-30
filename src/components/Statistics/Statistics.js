import { Section, List, Title, Item, Span } from './Statistics.styles.js';

export const Statistics = ({ stats }) => {
  return (
    <Section>
      <Title></Title>
      <List>
        {stats.map(stat => (
          <Item key={stat.id}>
            <Span>{stat.label}</Span>
            <Span>{stat.percentage}%</Span>
          </Item>
        ))}
      </List>
    </Section>
  );
};
