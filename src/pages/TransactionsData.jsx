import { useState } from "react";

const dummyTransactions = [
  {
    id: 1,
    memberName: "Alice Johnson",
    bookTitle: "Harry Potter",
    type: "Issue",
    date: "2024-11-10",
    fee: 0,
  },
  {
    id: 2,
    memberName: "Bob Smith",
    bookTitle: "1984",
    type: "Return",
    date: "2024-11-12",
    fee: 50,
  },
];

const TransactionsData = () => {
  const [transactions, setTransactions] = useState(dummyTransactions);

    const addTransaction= () => {
        const newTransaction = {
            id: transactions.length+1,
            memberName: "Khushi",
            bookTitle: "Big Stepper",
            type: "Issue",
            date: new Date().toISOString().split("T")[0],
            fee: 10
        }
        setTransactions([...transactions, newTransaction]);
    }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Transactions Management</h1>
      <button onClick={addTransaction}>Add Transaction</button>
      <table border="1" style={{ width: "100%", textAlign: "left", marginTop: "10px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Member Name</th>
            <th>Book Title</th>
            <th>Type</th>
            <th>Date</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.memberName}</td>
              <td>{transaction.bookTitle}</td>
              <td>{transaction.type}</td>
              <td>{transaction.date}</td>
              <td>{transaction.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TransactionsData;
