import { Item, Photo, Text, Status } from './FriendList.styles.js';

export const FriendCard = (avatar, name, isOnline) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Photo src={avatar} alt="User avatar" />
      <Text>{name}</Text>
    </Item>
  );
};
