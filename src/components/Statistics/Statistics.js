import { Section, List, Title, Item, Span } from './Statistics.styles.js';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
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
