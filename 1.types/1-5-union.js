"use strict";
{
    function move(direction) {
        console.log(direction);
    }
    move('left');
    const tile = 32;
    function login() {
        return {
            response: {
                body: 'logged in!',
            }
        };
    }
    // printLoginState(state)
    // success -> 👍 body
    // fail -> 😿 reason
    function printLoginState(state) {
        if ('response' in state) {
            console.log(success.response.body);
        }
        else {
            console.log(fail.reason);
        }
    }
    const success = {
        response: {
            body: `👍`,
        }
    };
    const fail = {
        reason: '😿',
    };
    printLoginState(success);
    printLoginState(fail);
}
