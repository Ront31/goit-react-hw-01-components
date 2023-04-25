import user from './Profile/user.json';
import { Profile } from './Profile/Profile';

import data from './Statistic/data.json';
import { Statistic } from './Statistic/Statistic';

import friends from './Friends/friends.json';
import { Friends } from './Friends/Friends';

import transactions from './Transactions/transactions.json';
import { Transaction } from './Transactions/Transaction';

console.log(user.username);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <Transaction items={transactions} />
    </div>
  );
};
