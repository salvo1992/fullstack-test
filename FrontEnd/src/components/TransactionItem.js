import React, { useState } from 'react';
import { List, Button, Modal, Input, Select } from 'antd';

const { Option } = Select;

const TransactionItem = ({ transaction, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTransaction, setEditedTransaction] = useState(transaction);

    const handleEdit = () => {
        onUpdate(editedTransaction);
        setIsEditing(false);
    };

    return (
        <List.Item
            actions={[
                <Button onClick={() => setIsEditing(true)}>Modifica</Button>,
                <Button onClick={() => onDelete(transaction._id)}>Elimina</Button>
            ]}
        >
            {transaction.description} - {transaction.amount} ({transaction.type})
            <Modal
                title="Modifica Transazione"
                visible={isEditing}
                onOk={handleEdit}
                onCancel={() => setIsEditing(false)}
            >
                <Select
                    value={editedTransaction.type}
                    onChange={(value) => setEditedTransaction({ ...editedTransaction, type: value })}
                >
                    <Option value="income">Entrata</Option>
                    <Option value="expense">Spesa</Option>
                </Select>
                <Input
                    value={editedTransaction.amount}
                    onChange={(e) => setEditedTransaction({ ...editedTransaction, amount: e.target.value })}
                    placeholder="Importo"
                />
                <Input
                    value={editedTransaction.description}
                    onChange={(e) => setEditedTransaction({ ...editedTransaction, description: e.target.value })}
                    placeholder="Descrizione"
                />
            </Modal>
        </List.Item>
    );
};

export default TransactionItem;
