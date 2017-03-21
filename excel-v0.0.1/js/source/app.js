'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Table from './components/Table';

const headers = ['title', 'year', 'price'];

ReactDOM.render(
    <div>
        <Logo />
        <Table headers={headers} />
    </div>,
    document.getElementById('app')
);
