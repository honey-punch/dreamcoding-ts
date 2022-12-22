"use strict";
{
    function login1() {
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            }
        };
    }
    // printLoginState(state)
    // success -> 👍 body
    // fail -> 😿 reason
    function printLoginState1(state) {
        if (state.result === 'success') {
            console.log(state.response.body);
        }
        else {
            console.log(state.reason);
        }
    }
}
