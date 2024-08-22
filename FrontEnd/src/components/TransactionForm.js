import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const TransactionForm = ({ onSubmit }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        onSubmit(values);
        form.resetFields();
    };

    return (
        <Form form={form} onFinish={onFinish} layout="inline">
            <Form.Item name="type" rules={[{ required: true, message: 'Seleziona un tipo' }]}>
                <Select placeholder="Tipo">
                    <Option value="income">Entrata</Option>
                    <Option value="expense">Spesa</Option>
                </Select>
            </Form.Item>
            <Form.Item name="amount" rules={[{ required: true, message: 'Inserisci un importo' }]}>
                <Input placeholder="Importo" type="number" />
            </Form.Item>
            <Form.Item name="description" rules={[{ required: true, message: 'Inserisci una descrizione' }]}>
                <Input placeholder="Descrizione" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Aggiungi</Button>
            </Form.Item>
        </Form>
    );
};

export default TransactionForm;
