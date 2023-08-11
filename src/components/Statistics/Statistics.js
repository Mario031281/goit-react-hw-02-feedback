import { List, ListItem, StatisticsSpan } from './Statistics.styled';
export const Statistics = ({ Percentage, Total, Good, Neutral, Bad }) => {
  return (
    <>
      <List>
        <ListItem>
          <StatisticsSpan>Good: {Good}</StatisticsSpan>
        </ListItem>
        <ListItem>
          <StatisticsSpan>Neutral: {Neutral}</StatisticsSpan>
        </ListItem>
        <ListItem>
          <StatisticsSpan>Bad: {Bad}</StatisticsSpan>
        </ListItem>
        <ListItem>
          <StatisticsSpan>Total: {Total}</StatisticsSpan>
        </ListItem>
        <ListItem>
          <StatisticsSpan>Positiv feedback: {Percentage}%</StatisticsSpan>
        </ListItem>
      </List>
    </>
  );
};
