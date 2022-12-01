{
  // Union types: OR
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction:Direction) {
    console.log(direction);
  }
  move('left');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 32;

  // function: login => success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  }
  type FailState = {
    reason: string;
  }
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: 'logged in!',
      }
    }
  }

  // printLoginState(state)
    // success -> 👍 body
    // fail -> 😿 reason
  function printLoginState(state: LoginState) {
    if('response' in state) {
      console.log(success.response.body);
    } else {
      console.log(fail.reason);
    }
  }
  const success: SuccessState = {
    response: {
      body: `👍`,
    }
  }
  const fail: FailState = {
    reason: '😿',
  }
  printLoginState(success);
  printLoginState(fail);
}