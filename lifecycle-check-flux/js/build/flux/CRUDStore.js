'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fbemitter = require('fbemitter');

var data = void 0;

var emitter = new _fbemitter.EventEmitter();

var CRUDStore = {
    init: function init() {
        // const storage = 'localStorage' in window ? localStorage.getItem('lifecycle-check-flux') : null;
        var storage = ['a', 'b', 'c'];
        // if (!storage) {
        //     data = [{}];
        // } else {
        //     data = JSON.parse(storage);
        // }
        data = storage;
    },
    addListener: function addListener(eventType, fn) {
        emitter.addListener(eventType, fn);
    },
    getData: function getData() {
        return data;
    },
    setData: function setData(newData) {
        var commit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        data = newData;
        if (commit && 'localStorage' in window) {
            localStorage.setItem('lifecycle-check-flux', JSON.stringify(newData));
        }
        emitter.emit('change');
    },
    getCount: function getCount() {
        return data.length;
    }
};

exports.default = CRUDStore;