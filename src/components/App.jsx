import { ProfileCard } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friends_List/FriendList";
import { TransactionsList } from "./Transaction_History/TransactionHistory";
import { GlobalStyle } from "./GlobalStyle";
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
export const App = () => {
  return (
    <div
      
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <GlobalStyle />
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics stats={data} />
      <FriendList friends={friends}
        avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline} />
      <TransactionsList items={transactions}/>
    </div>
  );
};
