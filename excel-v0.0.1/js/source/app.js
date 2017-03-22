'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Table from './components/Table';

const headers = ['title', 'year', 'price'];
const data = [
    ['sample1', '2017', '1,000'],
    ['sample2', '2016', '4,000'],
    ['sample3', '2015', '8,000']
];

ReactDOM.render(
    <div>
        <Logo />
        <Table headers={headers} data={data} />
    </div>,
    document.getElementById('app')
);
