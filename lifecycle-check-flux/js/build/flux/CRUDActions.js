'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CRUDStore = require('./CRUDStore');

var _CRUDStore2 = _interopRequireDefault(_CRUDStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CRUDActions = {
    create: function create(newRecord) {
        var data = _CRUDStore2.default.getData();
        data.unshift(newRecord);
        _CRUDStore2.default.setData(data);
    }
};
exports.default = CRUDActions;