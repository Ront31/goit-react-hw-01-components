import { Transaction } from './Transaction';
// import css from './Transaction.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => (
        <Transaction
          key={transaction.id}
          type={transaction.type}
          amount={transaction.amount}
          currency={transaction.currency}
        />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};
