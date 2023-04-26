import user from './Profile/user.json';
import { Profile } from './Profile/Profile';

import data from './Statistic/data.json';
import { Statistic } from './Statistic/Statistic';

import friends from './Friends/1.json';
import { Friendslist } from './Friends/Friendslist';

// import transactions from './Transactions/transactions.json';
// import { Transaction } from './Transactions/Transaction';

console.log(user.username);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <Statistic stats={data} />
      <Friendslist friends={friends} />
      {/* <Transaction items={transactions} /> */}
    </div>
  );
};
