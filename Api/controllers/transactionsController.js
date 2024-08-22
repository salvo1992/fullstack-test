const Transaction = require('../models/transaction');

// Crea una nuova transazione
exports.createTransaction = async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ message: 'Errore nella creazione della transazione', error });
    }
};

// Legge tutte le transazioni
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Errore nella lettura delle transazioni', error });
    }
};

// Aggiorna una transazione esistente
exports.updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!transaction) return res.status(404).json({ message: 'Transazione non trovata' });
        res.json(transaction);
    } catch (error) {
        res.status(400).json({ message: 'Errore nell\'aggiornamento della transazione', error });
    }
};

// Elimina una transazione
exports.deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if (!transaction) return res.status(404).json({ message: 'Transazione non trovata' });
        res.json({ message: 'Transazione eliminata' });
    } catch (error) {
        res.status(500).json({ message: 'Errore nella cancellazione della transazione', error });
    }
};
