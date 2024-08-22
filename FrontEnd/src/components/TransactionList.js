import React from 'react';
import TransactionItem from './TransactionItem';
import { List } from 'antd';

const TransactionList = ({ transactions, onDelete, onUpdate }) => {
    return (
        <List
            dataSource={transactions}
            renderItem={(transaction) => (
                <TransactionItem
                    transaction={transaction}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            )}
        />
    );
};

export default TransactionList;
