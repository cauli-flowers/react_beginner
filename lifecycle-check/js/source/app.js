'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Base from './components/Base';

let data = ['a', 'b', 'c'];

ReactDOM.render(
    <div>
        <Base data={data} />
    </div>,
    document.getElementById('app')
);
