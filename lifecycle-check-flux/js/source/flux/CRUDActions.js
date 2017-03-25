// @flow
import CRUDStore from './CRUDStore';

const CRUDActions = {
    create(newRecord: Object) {
        let data = CRUDStore.getData();
        data.unshift(newRecord);
        CRUDStore.setData(data);
    }
};

export default CRUDActions
