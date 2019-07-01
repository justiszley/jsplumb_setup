import {jsPlumb} from 'jsplumb';

const instance = jsPlumb.getInstance({
    Container: '#container',
});

instance.ready(() => {
    console.log('ready beach');
});