import React, { useState, useEffect } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import axios from 'axios';

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async () => {
        const response = await axios.get('/api/transactions');
        setTransactions(response.data);
    };

    const addTransaction = async (transaction) => {
        const response = await axios.post('/api/transactions', transaction);
        setTransactions([...transactions, response.data]);
    };

    const updateTransaction = async (transaction) => {
        const response = await axios.put(`/api/transactions/${transaction._id}`, transaction);
        setTransactions(transactions.map(t => t._id === transaction._id ? response.data : t));
    };

    const deleteTransaction = async (id) => {
        await axios.delete(`/api/transactions/${id}`);
        setTransactions(transactions.filter(t => t._id !== id));
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <div>
            <TransactionForm onSubmit={addTransaction} />
            <TransactionList
                transactions={transactions}
                onDelete={deleteTransaction}
                onUpdate={updateTransaction}
            />
        </div>
    );
};

export default TransactionsPage;
