import React from 'react'
import UserProfile from './components/SocialNet/Profile'
import user from './data/user.json'
import Statistic from './components/Stats/Statistic'
import statData from './data/statistical-data.json'
import FriendsList from './components/Friends/friends'
import friends from './data/friends'
import TransactionHistory from './components/Transactions/transactions'
import transactions from './data/transactions.json'









const App = () => {
  return (
    <div>
            <UserProfile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
          />
      <Statistic title="Upload stats" stats={statData} />
      <FriendsList friends={friends}/>
       <TransactionHistory items={transactions} />
      </div>
      
    );
};

export default App;