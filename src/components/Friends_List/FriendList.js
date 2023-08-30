import { FriendCard } from './FriendListItem.js';
import { Section, List } from './FriendList.styles.js';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      <List>
        {friends.map(item => (
          <FriendCard
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        ))}
      </List>
    </Section>
  );
};
