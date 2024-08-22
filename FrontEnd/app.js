import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TransactionsPage from './pages/TransactionsPage';

const App = () => (
    <Router>
        <Switch>
            <Route path="/" component={TransactionsPage} />
        </Switch>
    </Router>
);

export default App;
