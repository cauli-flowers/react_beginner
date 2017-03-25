// @flow
import {EventEmitter} from 'fbemitter';

let data;
const emitter = new EventEmitter();

const CRUDStore = {
    init() {
        // const storage = 'localStorage' in window ? localStorage.getItem('lifecycle-check-flux') : null;
        const storage = ['a', 'b', 'c'];
        // if (!storage) {
        //     data = [{}];
        // } else {
        //     data = JSON.parse(storage);
        // }
        data = storage;
    },

    addListener(eventType: string, fn: Function) {
        emitter.addListener(eventType, fn);
    },

    getData(): Array<Object> {
        return data;
    },

    setData(newData: Array<Object>, commit: boolean = true) {
        data = newData;
        if (commit && 'localStorage' in window) {
            localStorage.setItem('lifecycle-check-flux', JSON.stringify(newData));
        }
        emitter.emit('change');
    },

    getCount(): number {
        return data.length;
    }
}

export default CRUDStore
