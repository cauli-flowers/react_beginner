'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Base from './components/Base';
import CRUDStore from './flux/CRUDStore';

CRUDStore.init();

ReactDOM.render(
    <div>
        <Base />
    </div>,
    document.getElementById('app')
);
