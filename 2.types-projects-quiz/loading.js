"use strict";
{
    function printState(state) {
        switch (state.state) {
            case 'loading':
                console.log('👀 loading...');
                break;
            case 'success':
                console.log(`😃 ${state.response.body}`);
                break;
            case 'fail':
                console.log(`😱 ${state.reason}`);
                break;
            default:
                throw new Error('no state');
        }
    }
    printState({ state: 'loading' }); // 👀 loading...
    printState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
    printState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
