'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Cauliflower from './components/Cauliflower'

const headers = ['title', 'year', 'price'];
const data = [
    {title: 'sample1', year: '2017', price: '1000'},
    {title: 'sample2', year: '2015', price: '5000'},
    {title: 'sample3', year: '2016', price: '8000'},
];

ReactDOM.render(
    <div>
        <Cauliflower headers={headers} data={data} />
    </div>,
    document.getElementById('app')
);
