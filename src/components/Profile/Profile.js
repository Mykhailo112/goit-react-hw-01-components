import {
  DivCard,
  DivDescription,
  Photo,
  Text,
  List,
  Item,
  Span,
} from '../Profile/Profile.styles';

export const ProfileCard = ({ username, tag, location, avatar, stats }) => {
  return (
    <DivCard>
      <DivDescription>
        <Photo src={avatar} alt="User avatar" />
        <Text>{username}</Text>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </DivDescription>
      <List>
        <Item>
          <Span>Followers</Span>
          <Span>{stats.followers}</Span>
        </Item>
        <Item>
          <Span>Views</Span>
          <Span>{stats.views}</Span>
        </Item>
        <Item>
          <Span>Likes</Span>
          <Span>{stats.likes}</Span>
        </Item>
      </List>
    </DivCard>
  );
};
